---
---

/*************************
 * Various functionality
 ************************/

function getOS() {
  var osname = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) osname = "Windows";
  if (navigator.appVersion.indexOf("Mac") != -1) osname = "Mac OS";
  if (navigator.appVersion.indexOf("Linux") != -1) osname = "Linux";
  if (navigator.appVersion.indexOf("X11") != -1) osname = "UNIX";
  return osname;
}


/***************************
 * Document initialization
 **************************/
$(document).ready(function(){

  // background image on frontpage
  $(".splash").backstretch("{{ site.baseurl }}/resources/img/view-leman-opt2.jpg");

  // tooltips (front page)
  $(".marker").mouseover(function(){ $(".tip").show(); });
  $(".marker").mouseout(function(){ $(".tip").hide(); });

  $("#source-code").mouseover(function(){ $(this).find(".toptip").show(); });
  $("#source-code").mouseout(function(){ $(this).find(".toptip").hide(); });
  $("#scala-lang-twitter").mouseover(function(){ $(this).find(".toptip").show(); });
  $("#scala-lang-twitter").mouseout(function(){ $(this).find(".toptip").hide(); });

  // get current year and put it in span
  var currYear = new Date().getFullYear()
  $(".current-year").text(currYear);

  // same height hack for scala in a nutshell boxes
  function makeAllBoxesSameHeight(boxes) {
    maxHeight = Math.max.apply(
      Math, boxes.map(function() {
          return $(this).height();
    }).get());
    boxes.height(maxHeight);
  }
  var nutshell = $(".bullet-point").not(".span12");
  makeAllBoxesSameHeight(nutshell);

  // var newsBoxes = $(".newsbox");
  // makeAllBoxesSameHeight(newsBoxes);

  // expanding code snippets (front page)
  function expandSnippetAction(snippetID, container) {
    var codeBox = container.find(".row");

    function go() {
      var snippet = $(snippetID).html();

      // for positioning the arrow
      var arrow = $(this).parent().siblings(".code-snippet-arrow");
      var centerPoint = $(this).position().left + $(this).width()/2;
      arrow.css("left", centerPoint);

      var codeSnippetInContainer = codeBox.html();

      if (container.is(":hidden")) {
        arrow.show();
        arrow.addClass("hover");
        codeBox.html(snippet);
        container.slideDown();
      } else if (codeSnippetInContainer == snippet) {
        container.slideUp(function() {
          arrow.hide();
        });
      } else {
        var hgt = $(snippetID).height();
        arrow.addClass("hover");
        codeBox.html(snippet);
        codeBox.animate({height: hgt}, 400);
      }
    }
    return go;
  }

  var row1 = $("#code-snippet-row1");
  var row2 = $("#code-snippet-row2");

  $("#java-interop").click(expandSnippetAction("#hidden-java-interop", row1));
  $("#type-inference").click(expandSnippetAction("#hidden-type-inference", row1));
  $("#concurrency-distribution").click(expandSnippetAction("#hidden-concurrency-distribution", row1));

  $("#traits").click(expandSnippetAction("#hidden-traits", row2));
  $("#pattern-matching").click(expandSnippetAction("#hidden-pattern-matching", row2));
  $("#higher-order-functions").click(expandSnippetAction("#hidden-higher-order-functions", row2));

  // arrow color hack for hover-overs
  function arrowMouseover (snippetID, container) {

    function go () {
      var codeSnippetInContainer = container.find(".row").html();
      var snippet = $(snippetID).html();
      if (codeSnippetInContainer == snippet) {
        var arrow = $(this).parent().siblings(".code-snippet-arrow");
        arrow.addClass("hover");
      }
    }
    return go;
  }
  function arrowMouseout () {
    var arrow = $(this).parent().siblings(".code-snippet-arrow");
    arrow.removeClass("hover");
  }

  $("#java-interop").hover(arrowMouseover("#hidden-java-interop", row1), arrowMouseout);
  $("#type-inference").hover(arrowMouseover("#hidden-type-inference", row1), arrowMouseout);
  $("#concurrency-distribution").hover(arrowMouseover("#hidden-concurrency-distribution", row1), arrowMouseout);

  $("#traits").hover(arrowMouseover("#hidden-traits", row2), arrowMouseout);
  $("#pattern-matching").hover(arrowMouseover("#hidden-pattern-matching", row2), arrowMouseout);
  $("#higher-order-functions").hover(arrowMouseover("#hidden-higher-order-functions", row2), arrowMouseout);

  // truncate main visible news item if it exceeds height of sidebar
  var sideboxHgt = $(".recent-news-items").height();
  var mainboxHgt = $(".newsbox.left").height();
  if (sideboxHgt < mainboxHgt) {
    $(".newsbox.left").height(sideboxHgt);
    $(".shadow").css('display','block');
  }

  // tweets
  $(function(){
    $("#tweets").tweetMachine('', {
      backendScript: 'http://www3.scala-lang.org/webscripts/ajax/getFromTwitter.php?callback=?',
      endpoint: 'statuses/user_timeline',
      user_name: 'scala_lang',
      include_retweets: true,
      exclude_replies: false,
      limit: 5,
      autoRefresh: false,
      tweetFormat: '\
        <div class="tweet-container">\
          <div class="tweet">\
            <p class="text content"></p>\
          </div>\
          <div class="caret-container">\
            <div class="caret-divider">\
              <div class="caret-outer"></div>\
              <div class="caret-inner"></div>\
            </div>\
          </div>\
          <div class="raw bottom-anchored">\
            <div class="avatar-wrapper">\
              <img class="avatar" width="50" height="50" src="" />\
            </div>\
            <span class="tweet-username">\
              <a href="" class="username" rel="external"></a>\
            </span>\
          </div>\
        </div>\
      '
    });
  });

});

<!-- prettyprint js to prepend generated pre/code tags -->
$(document).ready(styleCode);
function styleCode() {
  if (typeof disableStyleCode != "undefined") {
    return;
  }
  var a = false;
  $("pre code").parent().each(function() {
    if (!$(this).hasClass("prettyprint")) {
      $(this).addClass("prettyprint lang-scala linenums");
      a = true
    }
  });
  if (a) { prettyPrint() }
}

/***********************
 * Download page
 **********************/

$(document).ready(function() {
  var os = getOS();
  if (os == "Unknown OS") os = "UNIX";

  var osLabel = os.replace(/\s/g, '').toLowerCase();

  $("#main-download-button, #download-button").each(function() {
    var unixLink = "{{ site.scala_maindownload_unix }}",
        windowsLink = "{{ site.scala_maindownload_windows }}",
        link = (os == "Windows") ? windowsLink : unixLink;
    $(this).attr("href", link).addClass(osLabel);
  });

  // Do not do any of the following if we're not on a download page
  // Otherwise a TypeError is raised and disables all other scripts on the page
  if ($("#download-space").length == 0)
    return;

  $("#download-button, #getting-started-popup").click(function() {
    $("#getting-started-popup").toggleClass("open");
  });

  var anchor = document.getElementById("#link-main-unixsys");
  if (os == "Windows") {
    anchor = document.getElementById("#link-main-windows");
  }
  if (anchor == null) anchor = document.getElementById("#link-main-one4all");
  var link = anchor.getAttribute("href");

  $("#download-space").append(
    $('<a>', {href: link, class: 'btn download'}).append(
      $('<img>', {src: imageurl})
    ).append(
      $('<br>')
    ).append("Download Scala for " + os)
  );
});

/***********************
 * Main Page Download Button
 **********************/

$(document).ready(function() {
  var os = getOS();
  if (os == "Unknown OS") os = "UNIX";
  var hiddenDownload = $("#link-main-unixsys");
  if (os == "Windows") {
    hiddenDownload = $("#link-main-windows");
  }
  // get the right download link in place
  var downloadLink = $("#download-btn");
  if (downloadLink.length > 0) {
    downloadLink.text("Download for " + os);
    downloadLink.prop("href", hiddenDownload.attr("href"));
  }

});



/******************************
 * Events and trainings feeds *
 ******************************/

$(document).ready(function(){
  function compareFormattedDates(lhs, rhs) {
    var lhsDate = new Date(lhs);
    var rhsDate = new Date(rhs);
    if (lhsDate < rhsDate)
      return -1;
    else if (lhsDate > rhsDate)
      return 1;
    else
      return 0;
  }

  // EVENTS

  (function() {

  // Stop early if the element does not exist, i.e., we're not on the front page
  if ($('#eventspane').length == 0)
    return;
  var isFrontPage = $('.events').length != 0;
  var additionalClass =
    isFrontPage ? 'event-item-front-page' : 'event-item-event-page';

  var MAX_EVENTS = isFrontPage ? 5 : 15;

  function compareEventsByDate(lhs, rhs) {
    return compareFormattedDates(lhs.start, rhs.start);
  }

  var scalaLangEvents = [
  {% for event in site.categories.events %}
  {% if event.date >= site.time %}{% comment %} No point in including outdated events {% endcomment %}
    {
      "title": "{{ event.title }}",
      "logo": "{{ event.logo }}",
      "location": "{{ event.location }}",
      "start": "{{ event.start }}",
      "end": "{{ event.end }}",
      "url": "{{ event.link-out }}",
    },
  {% endif %}
  {% endfor%}
  ];

  function doPopulateEventsPane(allEvents) {
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    allEvents = allEvents.filter(function (event) {
      return (event.end ? new Date(event.end) : new Date(event.start)) >= new Date();
    });
    allEvents.sort(compareEventsByDate);
    var content = "";
    for (i = 0; i < allEvents.length && i < MAX_EVENTS; i++) {
      var event = allEvents[i];

      var eventStart = new Date(event.start);
      var startMonth = monthNames[eventStart.getMonth()];
      var startDay   = eventStart.getDate();
      var year       = eventStart.getFullYear();
      var prefix     = startMonth + ' ' + startDay
      var date       = prefix + ' ' + year;

      if (event.end) {
        var eventEnd = new Date(event.end);
        var endMonth = monthNames[eventEnd.getMonth()];
        var endDay =  eventEnd.getDate();
        if (startMonth == endMonth && startDay != endDay) {
          date = prefix + '-' + endDay + ' ' + year;
        } else if (startMonth == endMonth && startDay == endDay) {
          date = prefix + ' ' + year;
        } else {
          date = prefix + ' - ' + endMonth + ' ' + endDay + ' ' + year;
        }
      }
      var thisContent =
        '<div class="event-item-wrap '+additionalClass+'" onclick="window.location=\''+event.url+'\'">' +
          '<div class="event-item">' +
            '<div class="event-title"><a href="'+event.url+'">'+event.title+'</a></div>' +
            '<div class="event-logo"><a href="'+event.url+'"><img class="event-logo" src="'+event.logo+'" alt="Logo" /></a></div>' +
            '<div class="event-float-right">' +
              '<div class="event-location">'+event.location+'</div>' +
              '<div class="event-date">'+
                date + '</div>' +
              '</div>' +
          '</div>' +
        '</div>';
      $("#eventspane").append(thisContent);
    }
  };

  function onEventsAjaxSuccess(response, textStatus, jqXHR) {
    var allEvents = scalaLangEvents.concat(response);
    doPopulateEventsPane(allEvents);
  }

  function onEventsAjaxError(jqXHR, textStatus, errorThrown) {
    // log the error to the console
    console.error(
      "Could not load Typesafe event feed: " + textStatus, errorThrown);
    // but at least display events from scala-lang
    doPopulateEventsPane(scalaLangEvents);
  }

  $.ajax({
    url: "{{ site.baseurl }}/cgi-bin/typesafe-feed-events",
    type: "GET",
    dataType: "json",
    success: onEventsAjaxSuccess,
    error: onEventsAjaxError
  });

  })();

  // TRAININGS

  (function() {

  // Stop early if the element does not exist, i.e.,
  // we're not on the front page nor on the Trainings page
  if ($('#trainingspane').length == 0)
    return;
  var isFrontPage = $('.training').length != 0;
  var additionalClass =
    isFrontPage ? 'training-item-front-page' : 'traning-item-training-page';

  var MAX_TRAININGS = isFrontPage ? 5 : 15;

  function compareTrainingsByDate(lhs, rhs) {
    return compareFormattedDates(lhs.when, rhs.when);
  }

  var scalaLangTrainings = [
  {% for training in site.categories.training %}
  {% if training.date >= site.time %}{% comment %} No point in including outdated training sessions {% endcomment %}
    {
      title: "{{ training.title }}",
      description: "{{ training.description }}",
      url: "{{ training.link-out }}",
      sessions: [
        {
          where: "{{ training.where }}",
          when: "{{ training.when }}",
          trainers: "{{ training.trainers }}",
          organizer: "{{ training.organizer }}",
          status: "{{ training.status }}"
        }
      ]
    },
  {% endif %}
  {% endfor%}
  ];

  function flattenSessions(trainings) {
    var result = new Array();
    for (i = 0; i < trainings.length; i++) {
      var training = trainings[i];
      for (j = 0; j < training.sessions.length; j++) {
        var session = training.sessions[j];
        result.push({
          title: training.title,
          description: training.description,
          url: training.url,
          where: session.where,
          when: session.when,
          trainers: session.trainers,
          organizer: session.organizer,
          status: session.status
        });
      }
    }
    return result;
  }

  function doPopulateTrainingsPane(allTrainings0) {
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var allTrainings = flattenSessions(allTrainings0);
    allTrainings = allTrainings.filter(function (training) {
      return new Date(training.when) >= new Date();
    });
    allTrainings.sort(compareTrainingsByDate);
    var content = "";
    for (i = 0; i < allTrainings.length && i < MAX_TRAININGS; i++) {
      var training = allTrainings[i];
      var trainingDate = new Date(training.when);
      var month = monthNames[trainingDate.getMonth()];
      var day = trainingDate.getDate();
      var year = trainingDate.getFullYear();
      var thisContent =
        '<div class="training-item-wrap '+additionalClass+'" onclick="window.location=\''+training.url+'\'">' +
          '<div class="training-item">' +
            '<div class="training-title"><a href="'+training.url+'">'+training.title+'</a></div>' +
            '<div class="training-date">' +
               '<div class="date"><div class="month">'+month+'</div><div class="day">'+day+'</div></div><div class="year">'+year+'</div>' +
            '</div>'+
            '<div class="training-float-right">' +
              '<div class="training-location">'+training.where+'</div>' +
              '<div class="training-trainers-name"> By '+training.trainers+'</div>' +
              '<div class="training-organizer">'+training.organizer+'</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      $("#trainingspane").append(thisContent);
    }
  }

  function onTrainingsAjaxSuccess(response, textStatus, jqXHR) {
    var allTrainings = scalaLangTrainings.concat(response);
    doPopulateTrainingsPane(allTrainings);
  }

  function onTrainingsAjaxError(jqXHR, textStatus, errorThrown) {
    // log the error to the console
    console.error(
      "Could not load Typesafe training feed: " + textStatus, errorThrown);
    // but at least display trainings from scala-lang
    doPopulateTrainingsPane(scalaLangTrainings);
  }

  $.ajax({
    url: "{{ site.baseurl }}/cgi-bin/typesafe-feed-trainings",
    type: "GET",
    dataType: "json",
    success: onTrainingsAjaxSuccess,
    error: onTrainingsAjaxError
  });

  })();

});

/**************************
 * Community tickets feed *
 **************************/

$(document).ready(function(){
  var $communityTicketsDiv = $('#communitytickets');

  // Stop early if the element does not exist
  if ($communityTicketsDiv.length == 0)
    return;

  var MAX_TICKETS_PER_PAGE = 20;

  function escapeHTML(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function truncateWords(text, words) {
    return text.split(" ").splice(0, words).join(" ");
  }

  function doPopulateTicketsPane(data) {
    var pageCount = Math.ceil(data.total / data.maxResults);
    var currentPage = Math.floor(data.startAt / data.maxResults) + 1;

    $("#communitytickets").empty();

    var pagerList = $('<ul>');

    for (var i = 0; i <= pageCount+1; i++) {
      var page, buttonText;
      if (i == 0) {
        page = currentPage-1;
        buttonText = '«';
      } else if (i > pageCount) {
        page = currentPage+1;
        buttonText = '»';
      } else {
        page = i;
        buttonText = i.toString();
      }

      var valid = (page >= 1) && (page <= pageCount);
      var item;

      if (valid) {
        var clickFun = (function(startAt) {
          return function() {
            doAjaxQuery(startAt);
            return false;
          }
        })((page-1) * data.maxResults);

        var anchor = $('<a>', {
          href: '#',
          text: buttonText,
          click: clickFun
        });
        item = $('<li>', {
          class: page == currentPage ? 'active' : ''
        }).append(anchor);
      } else {
        var anchor = $('<a>', {
          href: '#',
          text: buttonText,
          click: function() {
            return false;
          }
        });
        item = $('<li>', {
          class: 'disabled'
        }).append(anchor);
      }

      pagerList.append(item);
    }

    $("#communitytickets").append(
      $('<div>', {class: 'pagination'}).append(pagerList)
    );

    var issues = data.issues;
    for (i = 0; i < issues.length; i++) {
      var issue = issues[i];
      var fields = issue.fields;

      /* Note: if you want to add more fields (or remove some), be sure to
       * update the query URL below, in doAjaxQuery(), so that the 'fields'
       * parameter contains the list of fields you want to receive.
       */
      var thisContent =
        '<hr /><div class="tickets-item">' +
          '<div class="tickets-title"><a href="https://issues.scala-lang.org/browse/'+issue.key+'">'+escapeHTML(fields.summary)+'</a></div>' +
          '<div class="tickets-issuetype"><img src="'+fields.issuetype.iconUrl+'" /> '+escapeHTML(fields.issuetype.name)+'</div>' +
          '<div class="tickets-priority"><img src="'+fields.priority.iconUrl+'" /> '+escapeHTML(fields.priority.name)+'</div>' +
          '<div class="tickets-components">'+fields.components.map(function (component) {
            return '<a href="https://issues.scala-lang.org/browse/SI/component/'+component.id+'">'+escapeHTML(component.name)+'</a>';
          }).join(', ')+'</div>'+
          '<div class="tickets-description">'+truncateWords(escapeHTML(fields.description), 50)+'</div>'+
          // '<div class="tickets-data"><pre>'+JSON.stringify(issue, undefined, 2)+'</pre></div>' +
        '</div>';

      $("#communitytickets").append(thisContent);
    }
  };

  function onAjaxSuccess(response, textStatus, jqXHR) {
    doPopulateTicketsPane(response);
  }

  function onAjaxError(jqXHR, textStatus, errorThrown) {
    // log the error to the console
    console.error(
      "Could not load community tickets from JIRA: " + textStatus, errorThrown);
  }

  function doAjaxQuery(startAt) {
    /* Note: the 'fields' parameter contains the list of fields we use in
     * the construction of the display, in doPopulateTicketsPane().
     */
    $.ajax({
      url: "https://issues.scala-lang.org/rest/api/2/search?jql=project+in+%28SI,SUGGEST%29+AND+status+%3D+Open+AND+labels+%3D+community+ORDER+BY+component&maxResults="+MAX_TICKETS_PER_PAGE+'&startAt='+startAt+'&fields=summary,issuetype,priority,components,description',
      type: "GET",
      dataType: "jsonp",
      jsonp: 'jsonp-callback',
      crossDomain: true,
      success: onAjaxSuccess,
      error: onAjaxError
    });
  }

  doAjaxQuery(0);

});

/**************************
 * Google Analytics       *
 **************************/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-574683-6']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var f = function(event){
  var href = $(this).attr('href');
  var target = $(this).attr('target');
  _gaq.push(['_trackEvent','Downloads','Download',href]);
  if (target === undefined || target.toLowerCase() != '_blank') {
    setTimeout(function() { location.href = href; }, 200);
    return false;
  }
};
function endsWith(str, suffix) {
    if (str && suffix)
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
$(function(){
  $('a').filter(function(){
    var href = $(this).attr('href');
    return !(endsWith(href,'/') || endsWith(href,'html') || $(this).hasClass('no-analytics'));
  }).click(f);
});




