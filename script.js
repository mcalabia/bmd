$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.header').removeClass('transparent').addClass('solid');
    } else {
      $('.header').removeClass('solid').addClass('transparent');
    }
  });

  $(document).ready(function () {
   
  $('.logos-block').owlCarousel({
    
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
              margin:40,
              loop:true,
              autoWidth:true,
            },
            991:{
              autoplay:true,
              margin:92,
              loop:true,
              autoWidth:true,
            },
            1200:{
              autoplay:false,
            }
        }
})
  });
  
