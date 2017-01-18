// Sliding Panel
$(document).ready(function () {
	$('.navigation-panel-button,.navigation-fade-screen,.navigation-panel-close').on('click touchstart', function (e) {
		$('.navigation-menu,.navigation-fade-screen').toggleClass('is-visible');
		e.preventDefault();
	});
});

// Expanded
$('.open-scala-expanded').click(function(){
    $('.scala-item-expanded').slideToggle('slow');
});
