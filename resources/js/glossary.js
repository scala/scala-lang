/*****************************
 * Text Filtering (Glossary) *
 *****************************/
$(window).load(function(){
  $('#filter').focus();
  $("#filter").keydown(function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    // Loop through the comment list
    $("#glossary ul li").each(function(){
      // If the name of the glossary term does not contain the text phrase fade it out
      if ( jQuery(this).find("h4").text().search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
        // Show the list item if the phrase matches and increase the count by 1
      } else {
        $(this).show();
        count++;
      }
    });

    // Update the count
    var numberItems = count;
    $("#filter-count").text("Found "+count+" occurrences.");
  });
});

jQuery(document).ready(function($) {
  // Scroll to glossary term specified by hash on page load
  hash = window.location.hash;
  if (hash != '') {
    $('html,body').animate({scrollTop:$('li '+hash).offset().top}, 500);
  }
  // Set scroll animation for glossary term links within page
  $("#glossary a[href^='#']").click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop:$('li '+this.hash).offset().top}, 500);
    window.location.hash = this.hash;
  });
});
