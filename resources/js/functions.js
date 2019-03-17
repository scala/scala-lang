---
---

// Sliding Panel and scala in a nutshell
$(document).ready(function() {
    $('.navigation-panel-button,.navigation-fade-screen,.navigation-panel-close').on('click touchstart', function(e) {
        $('.navigation-menu,.navigation-fade-screen').toggleClass('is-visible');
        e.preventDefault();
    });

    var menus = $('.items-menu');
    var allContents = $('.items-code');
    var allButtons = $('.scala-item');

    menus.each(function(index1, row) {
        var row = $(row);
        var items = row.find('.scala-item');
        var content = row.children('.items-content');
        var contents = content.children('.items-code');

        items.each(function(index2, button) {
            var jButton = $(button);
            jButton.click(function(event) {
                var activeCode = contents.eq(index2);
                var others = allContents.not(activeCode);
                allButtons.removeClass('active');
                others.hide();

                if (activeCode.is(":visible")) {
                    activeCode.hide();
                } else {
                    jButton.addClass('active')
                    activeCode.show();
                }

            });
        });
    });
});

// Tooltip
$(document).ready(function() {
        // Tooltip only Text
        $('.masterTooltip').hover(function(){
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 20; //Get X coordinates
                var mousey = e.pageY + 10; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
});

// Highlight
$(document).ready(function() {
    hljs.configure({
      languages: ["scala", "bash"]
    })
    hljs.initHighlighting();
});

// Show Blog
$(".hide").click(function() {
    $(".new-on-the-blog").hide();
    updatePointer();
});

//Tweet feed in frontpage
$('#tweet-feed').tweetMachine('', {
    backendScript: '/webscripts/ajax/getFromTwitter.php',
    endpoint: 'statuses/user_timeline',
    user_name: 'scala_lang',
    include_retweets: true,
    exclude_replies: false,
    limit: 6,
    pageLimit: 3,
    autoRefresh: false,
    animateIn: false,
    tweetFormat: `
    <div class="item-tweet">
            <img src="" class="avatar" alt="">
            <div class="tweet-text">
              <div class="header-tweet">
                <ul>
                  <li class="user"><a href="" class="userLink"></a></li>
                  <li class="username"><a href="" class="usernameLink"></a></li>
                </ul>
                <span class="date"></span>
              </div>
              <div class="main-tweet"></div>
            </div>
          </div>
      `
}, function(tweets, tweetsDisplayed) {
    $('.slider-twitter').unslider({});
});

// Scaladex autocomplete search

var scaladexUrlBase = 'https://index.scala-lang.org';

function scaladexUrl(item) {
  return scaladexUrlBase + "/" + item.organization + "/" + item.repository;
}

$('#scaladex-search').keypress(function(e){
  var RETURN = 13;
  if (e.which == RETURN ) {
    e.stopImmediatePropagation();
    e.preventDefault();
    window.open(scaladexUrlBase + "/search?q=" + e.target.value);
  }
});

$('#scaladex-search').autocomplete({
    paramName: 'q',
    serviceUrl: scaladexUrlBase + '/api/autocomplete',
    dataType: 'json',
    transformResult: function(response) {
      return {
        suggestions: $.map(response, function(dataItem) {
          return {
            value: dataItem.organization + " / " + dataItem.repository,
            data: dataItem
          };
        })
      };
    },
    noCache: true,
    onSelect: function (suggestion) {
      window.open(scaladexUrl(suggestion.data), '_blank');
    },
    formatResult: function(suggestion){
      var item = suggestion.data;
      var url = scaladexUrl(item);
      var title = item.organization + " / " + item.repository;
      return '<a href="' + url + '">' + '\n' +
             '  <p>' + title + '</p>' + '\n' +
             '  <span>'  + '\n' +
             item.description
             '  </span>'  + '\n' +
             '</a>';
    }
});

// TOC:
$(document).ready(function() {
    if ($("#sidebar-toc").length) {
        $('#sidebar-toc').toc({exclude: 'h1, h5, h6', context: '.inner-box', autoId: true, numerate: false});
        toggleStickyToc();
    }
})

$(window).resize(function() {
  toggleStickyToc();
});

var toggleStickyToc = function() {
    if ($("#sidebar-toc").length) {
        if ($(window).width() <= 992) {
            $(".sidebar-toc-wrapper").unstick();
        } else {
            $(".sidebar-toc-wrapper").sticky({
               topSpacing: 0,
               bottomSpacing: 500
            });
        }
    }
}

// Blog search
$(document).ready(function() {
  if ($("#blog-search-bar").length) {
    SimpleJekyllSearch({
      searchInput: document.getElementById('blog-search-bar'),
      resultsContainer: document.getElementById('result-container'),
      json: '/resources/json/search.json',
      searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
      limit: 5,
    });

    $("#blog-search-bar").on("change paste keyup", function () {
      if ($(this).val()) {
        $("#result-container").show();
      } else {
        $("#result-container").hide();
      }
    });
  }
});

// Scala in the browser
$(document).ready(function() {
  if ($("#scastie-textarea").length) {
    var editor =
      CodeMirror.fromTextArea(
        document.getElementById("scastie-textarea"),
        {
          // lineNumbers: false,
          matchBrackets: true,
          theme: "monokai",
          mode: "text/x-scala",
          autoRefresh: true,
          fixedGutter: false,
          extraKeys: {
            'Ctrl-Enter': 'run',
            'Cmd-Enter': 'run'
          }
        }
      );

    editor.setSize("100%", ($("#scastie-code-container").height()));

    var codeSnippet = "List(\"Hello\", \"World\").mkString(\"\", \", \", \"!\")";
    editor.getDoc().setValue(codeSnippet);
    editor.refresh();

    function run(){
      var scastieBaseUrl = "https://scastie.scala-lang.org";

      $.ajax(
        {
          type: "POST",
          url: scastieBaseUrl + '/scala-lang',
          data: editor.getDoc().getValue(),
          success: function(url) {
            window.open(scastieBaseUrl + "/" + url);
          },
          // otherwise it's considered a popup
          async: false
        }
      )
    }

    $('.btn-run').click(run);
    CodeMirror.commands.run = run;
  }
});

// OS detection
function getOS() {
  var osname = "linux";
  if (navigator.appVersion.indexOf("Win") != -1) osname = "windows";
  if (navigator.appVersion.indexOf("Mac") != -1) osname = "macos";
  if (navigator.appVersion.indexOf("Linux") != -1) osname = "linux";
  if (navigator.appVersion.indexOf("X11") != -1) osname = "unix";
  return osname;
}

$(document).ready(function() {
    if ($(".main-download").length) {
        var os = getOS();
        var intelliJlink = $("#intellij-" + os).text();
        var sbtLink = $("#sbt-" + os).text();
        var stepOneContent = $("#stepOne-" + os).html()
        $("#download-intellij-link").attr("href", intelliJlink);
        $("#download-sbt-link").attr("href", sbtLink);
        $("#download-step-one").html(stepOneContent);
    }
});


$(document).ready(function() {

  var os = getOS();
  if (os == "Unknown OS") os = "UNIX";

  var osLabel = os.replace(/\s/g, '').toLowerCase();

  // Do not do any of the following if we're not on a download page
  // Otherwise a TypeError is raised and disables all other scripts on the page
  if ($("#download-binaries").length == 0)
    return;

  /*$("#download-button, #getting-started-popup").click(function() {
    $("#getting-started-popup").toggleClass("open");
  });*/

  var anchor = document.getElementById("#link-main-unixsys");
  if (os == "windows") {
    anchor = document.getElementById("#link-main-windows");
  }
  if (anchor == null) anchor = document.getElementById("#link-main-one4all");
  var link = anchor.getAttribute("href");

  $("#download-binaries").attr("href", link).addClass(osLabel);
  $("#users-os").text(os);
});


var image = { width: 1680, height: 1100 };
var target = { x: 1028, y: 290 };

var pointer = $('#position-marker');

$(document).ready(updatePointer);
$(window).resize(updatePointer);

function updatePointer() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var xScale = windowWidth / image.width;
    var yScale = windowHeight / image.height;

    if ($(".new-on-the-blog").css('display') === 'none') {
        pointer.css('top', (target.y));
    } else {
        pointer.css('top', (target.y + 25));
    }

    pointer.css('left', (target.x) * xScale);
}

// TRAININGS
$(document).ready(function() {
    var MONTH_NAMES = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var MONTH_NAMES_SHORT = MONTH_NAMES.map(function (month) {
       return month.substr(0, 3);
    });

    function getTrainings() {
        function loadTrainings(url) {
            return $.getJSON(url)
                .then(function (data) {
                    // filter out extra ajax info
                    return data;
                }, function (jqXHR, textStatus, errorThrown) {
                    // recover so we can keep processing
                    return [];
                });
        }

        // load our trainings
        var ourTrainingsPromise = loadTrainings("/resources/json/trainings.json")
            .then(function (trainings) {
                return trainings.map(function (training) {
                    var parsedTraining = Object.assign({}, training);

                    // parse our date
                    parsedTraining.when = new Date(training.when);

                    return parsedTraining;
                }).filter(function(training) {
                    // make sure our date occurs in the future
                    return training.when >= new Date();
                })
            }, function (error) {
                // if our data is bad recover with an empty array
                return [];
            });

        // load the trainings from lightbend
        var lightbendTrainingsPromise = loadTrainings("/resources/php/typesafe-feed-trainings.php")
            .then(function(data) {
                var trainings = (data && data.length > 0) ? data[0] : [];

                // flatten and filter our sessions by date
                var flattenedTrainings = [];
                for (var i = 0; i < trainings.length; i++) {
                    var training = trainings[i];
                    for (var j = 0; j < training.sessions.length; j++) {
                        var session = training.sessions[j];

                        // make sure this session occurs in the future
                        var when = new Date(session.when);
                        if (when >= new Date()) {
                            flattenedTrainings.push({
                                title: training.title,
                                url: session.url,
                                location: session.where.toUpperCase(),
                                when: when,
                                organizer: session.organizer
                            });
                        }
                    }
                }

                return flattenedTrainings;
            }, function (error) {
                // if our data is bad recover with an empty array
                return [];
            });

        // load and combine all our trainings
        return $.when(ourTrainingsPromise, lightbendTrainingsPromise)
            .then(function (ourTrainings, lightBendTrainings) {
                return ourTrainings.concat(lightBendTrainings)
                    .sort(function (lhs, rhs) {
                        return lhs.when - rhs.when;
                    });
            });
    }

    // Render training data for our front page
    var frontPageTrainingList = $('.training-items-list');
    // Stop early if the front page element does not exist
    if (frontPageTrainingList.length !== 0) {
        getTrainings()
            .then(function (trainings) {
                var MAX_TRAININGS = 5;

                // clear out any preloaded training info
                frontPageTrainingList.empty();

                for (var i = 0; i < Math.min(trainings.length, MAX_TRAININGS); i++) {
                    var training = trainings[i];

                    // we should have validated our dates by this point
                    var month = MONTH_NAMES_SHORT[training.when.getMonth()];
                    var day = training.when.getDate();

                    // build up our training item
                    var content = '<a href=' + training.url + ' class="training-item card">' +
                        '<div class="calendar">' +
                            '<span>' + month + '</span>' +
                            '<span>' + day + '</span>' +
                        '</div>' +
                        '<div class="card-text">' +
                            '<h4>' + training.title + '</h4>' +
                            '<ul>' +
                                '<li class="online-courses-price">' + training.location + '</li>' +
                                '<li class="dot">•</li>' +
                                '<li class="online-courses-date">' + training.organizer + '</li>' +
                            '</ul>' +
                        '</div>' +
                    '</a>';

                    // add it to our list
                    frontPageTrainingList.append(content);
                }
            });
    }

    // Render training data for the training page
    var pathname = window.location.pathname;
    var trainingPageItemList = $('.training-events .wrap .inner-box');
    // Check if we are on the training page and the training page element exists
    if (pathname.startsWith("/training") && trainingPageItemList.length !== 0) {
        getTrainings()
            .then(function (trainings) {
                var MAX_TRAININGS = 999;

                // clear out any preloaded training info
                trainingPageItemList.empty();

                var content = "";

                var i = 0;
                var lastIndex = Math.min(trainings.length, MAX_TRAININGS);
                while (i < lastIndex) {
                    // we should have validated our dates by this point
                    var year = trainings[i].when.getFullYear();
                    var month = trainings[i].when.getMonth();

                    // create our training list container
                    content += '<h3>' + MONTH_NAMES[month] + ' ' + year + '</h3>';
                    content += '<div class="training-list">';

                    while (i < lastIndex) {
                        var training = trainings[i];

                        // check if we're still in the right month
                        if (training.when.getMonth() !== month || training.when.getFullYear() !== year) {
                            break;
                        }

                        // build up our training item
                        content += '<a href="' + training.url + '" class="training-item">' +
                            '<div class="calendar">' +
                                '<span>' + MONTH_NAMES_SHORT[month] + '</span>' +
                                '<span>' + training.when.getDate() + '</span>' +
                            '</div>' +
                            '<div class="training-text">' +
                                '<h4>' + training.title + '</h4>' +
                                '<p>' + training.location + '</p>' +
                                '<p>' + training.organizer + '</p>' +
                            '</div>' +
                        '</a>';

                        i++;
                    }

                    content += '</div>'
                }

                trainingPageItemList.append(content);
            });
    }
});
