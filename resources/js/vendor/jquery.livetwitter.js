/*
 * NOTE: This has been modified. Some options have been hard-coded in a rush.
 *       It now differs significantly from its original version.
 */

/*
 * jQuery LiveTwitter 1.7.3
 * - Live updating Twitter plugin for jQuery
 *
 * Copyright (c) 2009-2011 Inge Jørgensen (elektronaut.no)
 * Licensed under the MIT license (MIT-LICENSE.txt)
 *
 * $Date: 2011/10/28$
 */

/*jslint browser: true, devel: true, onevar: false, immed: false, regexp: false, indent: 2 */
/*global window: false, jQuery: false */

/*
 * Usage example:
 * $("#twitterSearch").liveTwitter('bacon', {limit: 10, rate: 15000});
 */


(function ($) {

  // Extend jQuery with a reverse function if it isn't already defined
  if (!$.fn.reverse) {
    $.fn.reverse = function () {
      return this.pushStack(this.get().reverse(), arguments);
    };
  }

  $.fn.liveTwitter = function (query, options, callback) {
    var domNode = this;
    $(this).each(function () {
      var settings = {};

      // Does this.twitter already exist? Let's just change the settings.
      if (this.twitter) {
        settings = $.extend(this.twitter.settings, options);
        this.twitter.settings = settings;
        if (query) {
          this.twitter.query = query;
        }
        if (this.twitter.interval) {
          this.twitter.refresh();
        }
        if (callback) {
          this.twitter.callback = callback;
        }

      // ..if not, let's initialize.
      } else {

        // These are the default settings.
        settings = $.extend({
          mode:      'user_timeline', // Mode, valid options are: 'search', 'user_timeline', 'list', 'home_timeline'
          rate:      15000,    // Refresh rate in ms
          limit:     4,       // Limit number of results
          imageSize: 70,       // Size of image in pixels
          refresh:   false,
          timeLinks: true,
          replies:   true,
          retweets:  true,
          service:   false,
          localization: {
            seconds: 'seconds ago',
            minute:  'a minute ago',
            minutes: 'minutes ago',
            hour:    'an hour ago',
            hours:   'hours ago',
            day:     'a day ago',
            days:    'days ago'
          }
        }, options);
        // showAuthor should default to true unless mode is 'user_timeline'. BS. I changed it.
        if (typeof settings.showAuthor === "undefined") {
          settings.showAuthor = (settings.mode === 'user_timeline') ? true : true;
        }

        // Set up a dummy function for the Twitter API callback.
        if (!window.twitter_callback) {
          window.twitter_callback = function () {
            return true;
          };
        }

        this.twitter = {
          settings:      settings,
          query:         query,
          interval:      false,
          container:     this,
          lastTimeStamp: 0,
          callback:      callback,

          // Convert the time stamp to a more human readable format
          relativeTime: function (timeString) {
            var parsedDate = Date.parse(timeString);
            var delta = (Date.parse(Date()) - parsedDate) / 1000;
            var r = '';
            if  (delta < 60) {
              r = delta + " " + settings.localization.seconds;
            } else if (delta < 120) {
              r = settings.localization.minute;
            } else if (delta < (45 * 60)) {
              r = (parseInt(delta / 60, 10)).toString() + " " + settings.localization.minutes;
            } else if (delta < (90 * 60)) {
              r = settings.localization.hour;
            } else if (delta < (24 * 60 * 60)) {
              r = '' + (parseInt(delta / 3600, 10)).toString() + " " + settings.localization.hours;
            } else if (delta < (48 * 60 * 60)) {
              r = settings.localization.day;
            } else {
              r = (parseInt(delta / 86400, 10)).toString() + " " + settings.localization.days;
            }
            return r;
          },

          // Update the relative timestamps
          updateTimestamps: function () {
            var twitter = this;
            $(twitter.container).find('span.time').each(function () {
              var time_element = twitter.settings.timeLinks ? $(this).find('a') : $(this);
              time_element.html(twitter.relativeTime(this.timeStamp));
            });
          },

          apiURL: function () {
            var params = {};

            var protocol = (window.location.protocol === 'https:') ? 'https:' : 'https:';
            var baseURL  = 'api.twitter.com/1/';
            var endpoint = '';

            // Override for Twitter-compatible APIs like Status.net
            if (this.settings.service) {
              baseURL = this.settings.service + '/api/';
            }

            // Search mode
            if (this.settings.mode === 'search') {
              baseURL  = (this.settings.service) ? this.settings.service + '/api/' : 'search.twitter.com/';
              endpoint = 'search';
              params   = {
                q:        (this.query && this.query !== '') ? this.query : null,
                geocode:  this.settings.geocode,
                lang:     this.settings.lang,
                rpp:      (this.settings.rpp) ? this.settings.rpp : this.settings.limit
              };

            // User/home timeline mode
            } else if (this.settings.mode === 'user_timeline' || this.settings.mode === 'home_timeline') {
              // got angry at json, and hardcoded stuff. just want it to work quickly.
              endpoint = 'statuses/' + this.settings.mode + '.json?include_entities=true&include_rts=' + this.settings.retweets + '&screen_name=' + this.query + '&count=' + this.settings.limit; //encodeURIComponent(this.query)
              /*params = {
                count:           this.settings.limit,
                include_rts:     (this.settings.mode === 'user_timeline' && this.settings.retweets) ? '1' : null,
                exclude_replies: (!this.settings.replies) ? '1' : null
              };*/

            // Favorites mode
            } else if (this.settings.mode === 'favorites') {
              endpoint = 'favorites';
              params = {
                id:       encodeURIComponent(this.query)
              };

            // List mode
            } else if (this.settings.mode === 'list') {
              endpoint = encodeURIComponent(this.query.user) +
                         '/lists/' +
                         encodeURIComponent(this.query.list) +
                         '/statuses';
              params = {
                per_page: this.settings.limit
              };
            }

            // Construct the query string
            var queryString = [];
            for (var param in params) {
              if (params.hasOwnProperty(param) && typeof params[param] !== 'undefined' && params[param] !== null) {
                queryString[queryString.length] = param + '=' + encodeURIComponent(params[param]);
              }
            }
            queryString = queryString.join("&");

            // Return the full URL
            return protocol + '//' + baseURL + endpoint + '&callback=?'; //+ '.json?' + queryString + '&callback=?';
          },

          // The different APIs will format the results slightly different,
          // so this method normalizes the tweet object.
          parseTweet: function (json) {
            var tweet = {
              id:         (json.id_str) ? json.id_str : json.id,
              text:       json.text,
              created_at: json.created_at
            };

            // Search/regular API differences
            if (this.settings.mode === 'search') {
              tweet = $.extend(tweet, {
                screen_name:       json.from_user,
                profile_image_url: json.profile_image_url
              });
            } else {
              tweet = $.extend(tweet, {
                screen_name:       json.user.screen_name,
                profile_image_url: json.user.profile_image_url,
                created_at:        json.created_at.replace(/^(\w+)\s(\w+)\s(\d+)(.*)(\s\d+)$/, "$1, $3 $2$5$4") // Fix for IE
              });
            }

            // Check if this is retweet, if so, exted with retweet user info
            if (typeof json.retweeted_status!='undefined') {
              tweet = $.extend(tweet, {
                retweeter_screen_name:       json.retweeted_status.user.screen_name,
                retweeter_profile_image_url: json.retweeted_status.user.profile_image_url
              });
            }

            // Twitter/Status.net
            if (this.settings.service) {
              tweet = $.extend(tweet, {
                url:         'http://' + this.settings.service + '/notice/' + tweet.id,
                profile_url: 'http://' + this.settings.service + '/' + json.from_user
              });
              if (window.location.protocol === 'https:') {
                tweet.profile_image_url = tweet.profile_image_url.replace('http:', 'https:');
              }

            } else {
              tweet = $.extend(tweet, {
                url:         'http://twitter.com/#!/' + tweet.screen_name + '/status/' + tweet.id,
                profile_url: 'http://twitter.com/#!/' + tweet.screen_name
              });
              // Someday, Twitter will add HTTPS support to twimg.com, but until then
              // we have to rewrite the profile image urls to the old Amazon S3 urls.
              if (window.location.protocol === 'https:') {
                var matches = tweet.profile_image_url.match(/http[s]?:\/\/a[0-9]\.twimg\.com\/(\w+)\/(\w+)\/(.*?)\.(\w+)/i);
                if (matches) {
                  tweet.profile_image_url = "https://s3.amazonaws.com/twitter_production/" + matches[1] + "/" + matches[2] + "/" + matches[3] + "." + matches[4];
                } else {
                  // Failsafe, if profile image url does not match the pattern above
                  // then, at least, change the protocol to HTTPS.
                  // The image may not load, but at least the page stays secure.
                  tweet.profile_image_url = tweet.profile_image_url.replace('http:', 'https:');
                }
              }
            }

            return tweet;
          },

          // Parses the tweet body, linking URLs, #hashtags and @usernames.
          parseText: function (text) {
            // URLs
            text = text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function (m) {
              return '<a href="' + m + '" rel="external">' + m + '</a>';
            });

            // Twitter
            if (!this.settings.service) {
              // @usernames
              text = text.replace(/@[A-Za-z0-9_]+/g, function (u) {
                return '<a href="http://twitter.com/#!/' + u.replace(/^@/, '') + '" rel="external">' + u + '</a>';
              });
              // #hashtags
              text = text.replace(/#[A-Za-z0-9_\-]+/g, function (u) {
                return '<a href="http://twitter.com/#!/search?q=' + u.replace(/^#/, '%23') + '" rel="external">' + u + '</a>';
              });

            // Other APIs
            } else {
              text = text.replace(/@[A-Za-z0-9_]+/g, function (u) {
                return '<a href="http://' + settings.service + '/' + u.replace(/^@/, '') + '" rel="external">' + u + '</a>';
              });
              text = text.replace(/#[A-Za-z0-9_\-]+/g, function (u) {
                return '<a href="http://' + settings.service + '/search/notice?q?' + u.replace(/^#/, '%23') + '" rel="external">' + u + '</a>';
              });
            }

            return text;
          },

          // Renders a tweet to HTML
          renderTweet: function (tweet) {
            var html = '<div class="tweet-container"><div class="tweet tweet-' + tweet.id + '">';

            html += '<p class="text"> ';
            html += this.parseText(tweet.text);
            html += '</p></div>';

            if (this.settings.showAuthor) {
              //alert("Is this.retweeter_screen_name defined? It's "+this.retweeter_screen_name);
              if (typeof tweet.retweeter_screen_name!='undefined') {
                html += '<div class="caret-container"><div class="caret-divider"><div class="caret-outer"></div><div class="caret-inner"></div></div></div>';
             // html += '<span class="triangle"></span>';
                html += '<div class="row bottom-anchored"><div class="span1"><div class="thumbnail">';
                html += '<img width="' + this.settings.imageSize + '" height="' + this.settings.imageSize + '" src="' + tweet.retweeter_profile_image_url + '" />';
                html += '</div></div><div  class="span2">';
                html += '<span class="username"><span class="original-tweet"><a href="' + tweet.url + '">original tweet</a></span> by </br><a href="http://twitter.com/#!/' + tweet.retweeter_screen_name + '" rel="external">' + tweet.retweeter_screen_name + '</a></span> ';
                html += '</div></div>';
              } else {
                html += '<div class="caret-container"><div class="caret-divider"><div class="caret-outer"></div><div class="caret-inner"></div></div></div>';
             // html += '<span class="triangle"></span>';
                html += '<div class="row"><div class="span1"><div class="thumbnail">';
                html += '<img width="' + this.settings.imageSize + '" height="' + this.settings.imageSize + '" src="' + tweet.profile_image_url + '" />';
                html += '</div></div><div class="span2">';
                html += '</br><span class="username"><a href="' + tweet.profile_url + '" rel="external">' + tweet.screen_name + '</a></span> ';
                html += '</div></div>';
              }
            }

            // closing the tweet-container div
            html += '</div>';

            return html;
          },

          // Handle reloading
          refresh: function (initialize) {
            var twitter = this;
            if (twitter.settings.refresh || initialize) {

              $.getJSON(twitter.apiURL(), function (json) {
                var newTweets = 0;

                // The search and regular APIs differ somewhat
                var results = (twitter.settings.mode === 'search') ? json.results : json;

                $(results).reverse().each(function () {
                  var tweet = twitter.parseTweet(this);

                  // Check if tweets should be filtered
                  if (!twitter.settings.filter || twitter.settings.filter(this)) {
                    // Check if this is actually a new tweet
                    if (Date.parse(tweet.created_at) > twitter.lastTimeStamp) {

                      // Insert the HTML
                      $(twitter.container).prepend(twitter.renderTweet(tweet));

                      // Make a note of the timestamp on the first span
                      // so we can update it later.
                      $(twitter.container).find('span.time:first').each(function () {
                        this.timeStamp = tweet.created_at;
                      });

                      // Fade in new tweets unless this is the first load.
                      if (!initialize) {
                        $(twitter.container).find('.tweet-' + tweet.id).hide().fadeIn();
                      }

                      // Remember the last timestamp for the next refresh.
                      twitter.lastTimeStamp = Date.parse(tweet.created_at);

                      newTweets += 1;
                    }
                  }
                });

                // Did we get any new tweets?
                if (newTweets > 0) {
                  // Remove old entries exceeding the limit
                  $(twitter.container).find('div.tweet:gt(' + (twitter.settings.limit - 1) + ')').remove();

                  // Run callback
                  if (twitter.callback) {
                    twitter.callback(domNode, newTweets);
                  }

                  // Trigger event
                  $(domNode).trigger('tweets');
                }
              });
            }
          },

          // Start refreshing
          start: function () {
            var twitter = this;
            if (!this.interval) {
              this.interval = setInterval(function () {
                twitter.refresh();
              }, twitter.settings.rate);
              this.refresh(true);
            }
          },

          // Stop refreshing
          stop: function () {
            if (this.interval) {
              clearInterval(this.interval);
              this.interval = false;
            }
          },

          // Clear all tweets
          clear: function () {
            $(this.container).find('div.tweet').remove();
            this.lastTimeStamp = null;
          }
        };

        var twitter = this.twitter;

        // Update the timestamps in realtime
        this.timeInterval = setInterval(function () {
          twitter.updateTimestamps();
        }, 5000);

        this.twitter.start();
      }
    });
    return this;
  };
})(jQuery);