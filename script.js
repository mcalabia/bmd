$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.header').removeClass('transparent').addClass('solid');
    } else {
      $('.header').removeClass('solid').addClass('transparent');
    }
  });
  