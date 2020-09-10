//For the color change effect on homepage

$(window).scroll(function() {

  // Change 45% earlier than scroll position so colour is there when we arrive.
  var scroll = $(window).scrollTop() + ($(window).height() / 2.2);

  $('.panel').each(function () {

    // Position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    if ($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll) {

      // Remove all classes on body with color-
      $('body').removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $('body').addClass('color-' + $(this).data('color'));

    }
  });

}).scroll();
