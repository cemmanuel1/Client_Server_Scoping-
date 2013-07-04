$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    var setVal = $(this).attr('data-heading');
    $('#awesomeness_holder').html('<h2>'+setVal+'</h2>')
  });

  // What other events do you need to bind to make the other pages work?
});
