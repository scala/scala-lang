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

// click tracking
var f = function(event){
  var href = $(this).attr('href');
  _gaq.push(['_trackEvent','Downloads','Download',href]);
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

// lightbend google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-23127719-1', 'typesafe.com', {'allowLinker': true, 'name': 'tsTracker'});
ga('tsTracker.require', 'linker');
ga('set', 'anonymizeIp', true);
ga('tsTracker.linker:autoLink', ['typesafe.com','playframework.com','scala-lang.org','scaladays.org','spray.io','akka.io','scala-sbt.org','scala-ide.org']);
ga('tsTracker.send', 'pageview');