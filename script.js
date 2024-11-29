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

// ANIMATION
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  // Navbar animation
  const navbar = document.querySelector(".header");
  if(navbar){
  gsap.fromTo(navbar, 
      { y: -100 }, 
      { duration: 1, y: 0, ease: "power2.out" }
  );
  }

  // Hero container animation
  const hero_container = document.querySelector(".title-1");
  if(hero_container){
  gsap.fromTo(hero_container, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, ease: "power2.out" }
  );
}

  // Slide up the hero description block
  const hero_description_block = document.querySelector(".hero-description");
  if(hero_description_block){
  gsap.fromTo(hero_description_block, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
  );
}

}

function animateElementWithScrollTrigger(element, section, delay) {
  const elementdata = document.querySelector(element);
if(elementdata){
  gsap.fromTo(element, 
      { y: 100, opacity: 0 }, 
      {
          y: 0, 
          opacity: 1, 
          duration: 1, 
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
              trigger: section,   
              // markers:true,
              start: "top bottom", 
              end: "bottom top",
              toggleActions: "play none none reverse"       
          }
      }
  );
}
}

initAnimations();
animateElementWithScrollTrigger(".text-3-up-content", ".text-3-up-content", .3);

  });
  
