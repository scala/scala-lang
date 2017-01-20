// Sliding Panel
$(document).ready(function () {
	$('.navigation-panel-button,.navigation-fade-screen,.navigation-panel-close').on('click touchstart', function (e) {
		$('.navigation-menu,.navigation-fade-screen').toggleClass('is-visible');
		e.preventDefault();
	});
});


// Show Blog
$(".hide").click(function(){
    $(".new-on-the-blog").hide();
});

$(".scala-item").click(function() {
	//$(".scala-item").addClass("active");
	$("ul li.contenido").hide();
	$(this).parent().children("li.contenido").slideDown();
});

// Expanded
$('.open-scala-expanded').click(function(){
    $('.scala-item-expanded').slideToggle('slow');
});

// Tweet feed in frontpage
$('#tweet-feed').tweetMachine('', {
    backendScript: '/resources/php/getFromTwitter.php',
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
        $('.slider-twitter').unslider({
          });
    });

		


		/*$('#scaladex-search').autocomplete({
    paramName: 'q',
    serviceUrl: 'https://scaladex.scala-lang.org/api/autocomplete',
    dataType: 'json',
    transformResult: function(response) {
        return {
            suggestions: $.map(response, function(dataItem) {
                return { value: dataItem.repository, data: 'https://scaladex.scala-lang.org/' + dataItem.organization + "/" + dataItem.repository };
            })
        };
    }
})*/
