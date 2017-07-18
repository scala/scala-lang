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
      console.log(suggestion);
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
      console.log("run");
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
  if (navigator.appVersion.indexOf("Mac") != -1) osname = "osx";
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
  if (os == "Windows") {
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

    pointer.css('top', (target.y));
    pointer.css('left', (target.x) * xScale);
}
