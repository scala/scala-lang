---
---

$(document).ready(function(){
  // parallax effect
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });

  // code example carousel
  $('.carousel').carousel();
  $(document).keyup(function(event) {
    switch (event.keyCode) {
      case 37: // lef t
        $('.carousel').carousel('prev');
        break;
      case 39: // right
        $('.carousel').carousel('next');
        break;
      default:
        break;
    }
  });

  // tweets
  $(function(){
    $("#tweets").liveTwitter('scala_lang');
  });

});


/******************************
 * Events and trainings feeds *
 ******************************/

$(document).ready(function(){
  var $eventsAndTrainingDiv = $('#eventsAndTraining');

  var MAX_EVENTS = 5;
  var MAX_TRAININGS = 5;

  // Stop early if the element does not exist
  if ($eventsAndTrainingDiv.length == 0)
    return;

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
      "url": "{{ event.url }}",
    },
  {% endif %}
  {% endfor%}
  ];

  function doPopulateEventsPane(allEvents) {
    allEvents = allEvents.filter(function (event) {
      return (event.end ? new Date(event.end) : new Date(event.start)) >= new Date();
    });
    allEvents.sort(compareEventsByDate);
    var content = "";
    for (i = 0; i < allEvents.length && i < MAX_EVENTS; i++) {
      var event = allEvents[i];
      var thisContent =
        event.title + " in " + event.location + "<br />" +
        event.start;
      if (event.end != "")
        thisContent += " to " + event.end;
      $("#eventspane").append("<li>" + thisContent + "</li>");
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

  // TRAININGS

  function compareTrainingsByDate(lhs, rhs) {
    return compareFormattedDates(lhs.when, rhs.when);
  }

  var scalaLangTrainings = [
  {% for training in site.categories.training %}
  {% if training.date >= site.time %}{% comment %} No point in including outdated training sessions {% endcomment %}
    {
      title: "{{ training.title }}",
      description: "{{ training.description }}",
      url: "{{ event.url }}",
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

  function keepOnlyOneSession(trainings) {
    var result = new Array();
    for (i = 0; i < trainings.length && i < MAX_TRAININGS; i++) {
      var training = trainings[i];
      var firstSession = training.sessions[0];
      result[i] = {
        title: training.title,
        description: training.description,
        url: training.url,
        where: firstSession.where,
        when: firstSession.when,
        trainers: firstSession.trainers,
        organizer: firstSession.organizer,
        status: firstSession.status
      };
    }
    return result;
  }

  function doPopulateTrainingsPane(allTrainings0) {
    var allTrainings = keepOnlyOneSession(allTrainings0);
    allTrainings = allTrainings.filter(function (training) {
      return new Date(training.when) >= new Date();
    });
    allTrainings.sort(compareTrainingsByDate);
    var content = "";
    for (i = 0; i < allTrainings.length; i++) {
      var training = allTrainings[i];
      var thisContent =
        training.title + "<br />" + training.when + ", " + training.where +
        ", by " + training.trainers;
      $("#trainingspane").append("<li>" + thisContent + "</li>");
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

});
