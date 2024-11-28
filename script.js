$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.header').removeClass('transparent').addClass('solid');
    } else {
      $('.header').removeClass('solid').addClass('transparent');
    }
  });

  $(document).ready(function () {
   
  $('.logos-block').owlCarousel({
    margin:92,
    loop:true,
    autoWidth:true,
    nav: false,
    items:6,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    responsiveClass:true,
        responsive:{
            0:{
              autoplay:true,
            },
            767:{
              autoplay:true,
            },
            1200:{
              autoplay:false,
            }
        }
})
  });
  