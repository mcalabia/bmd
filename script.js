$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.header').removeClass('transparent').addClass('solid');
    } else {
      $('.header').removeClass('solid').addClass('transparent');
    }
  });

  $(document).ready(function () {
    $('.testimonial-owl-carousel').owlCarousel({
      margin:48,
      loop:false,
      autoWidth:true,
      items:1,
      nav:true,
      navText: [$('.t-arrow-left'),$('.t-arrow-right')],
      rewindNav : true,
      dots: true, 
      dotsEach: true, 
      responsiveClass:true,
      responsive:{
          0:{
              autoWidth:false
          },
          991:{
              autoWidth:true
          }
      }
  })
  $('.logos-block').owlCarousel({
    nav: false,
    items:6,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    margin:92,
    loop:true,
    autoWidth:true,
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
      { duration: 1, y: 0, delay: 0.3,ease: "power2.out" }
  );
  }

  // Hero container animation
//   const hero_container = document.querySelector(".hero-content");
//   if(hero_container){
//   gsap.fromTo(hero_container, 
//       { opacity: 0 }, 
//       { opacity: 1, duration: 1, ease: "power2.out" }
//   );
// }

  // Slide up the hero description block
  function heroDescriptionAnimation(cssName){
    const hero_description_block = document.querySelector(cssName);
    if(hero_description_block){
      gsap.fromTo(hero_description_block, 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, delay: 0, ease: "power2.out" }
      );
    }
  }
  heroDescriptionAnimation(".hero-content");
  heroDescriptionAnimation(".htv-block");

  // Logo carousel container animation
  const logo_carousel_container = document.querySelector(".logos-container");
  if(logo_carousel_container){
  gsap.fromTo(logo_carousel_container, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
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

animateElementWithScrollTrigger(".text-3-card-1", ".text-3-up-column", .3);
animateElementWithScrollTrigger(".text-3-card-2", ".text-3-up-column", .6);
animateElementWithScrollTrigger(".text-3-card-3", ".text-3-up-column", .9);

animateElementWithScrollTrigger(".horizontal", ".text-3-up-column", .6);

animateElementWithScrollTrigger(".text-page-blocks-content", ".text-page-blocks-content", .3);

animateElementWithScrollTrigger(".tpb-card-1", ".text-page-blocks-cards-container", .3);
animateElementWithScrollTrigger(".tpb-card-2", ".text-page-blocks-cards-container", .6);
animateElementWithScrollTrigger(".tpb-card-3", ".text-page-blocks-cards-container", .9);
animateElementWithScrollTrigger(".tpb-card-4", ".text-page-blocks-cards-container", 1.2);

animateElementWithScrollTrigger(".stats-cell-1", ".stats-grid", .3);
animateElementWithScrollTrigger(".stats-cell-2", ".stats-grid", .6);

animateElementWithScrollTrigger(".featured-articles-title-block", ".featured-articles-title-block", .3);
animateElementWithScrollTrigger(".featured-articles-content #featured-1", ".featured-articles-content", .3);
animateElementWithScrollTrigger(".featured-articles-content #featured-2", ".featured-articles-content", .6);

animateElementWithScrollTrigger(".footer-header-cta-block", ".footer-header-cta-block", .3);
animateElementWithScrollTrigger(".featured-blog-title-description", ".featured-blog-title-description", .3);
animateElementWithScrollTrigger(".featured-blog-stack", ".featured-blog-stack", .3);
animateElementWithScrollTrigger(".articles-block", ".articles-block", .3);
animateElementWithScrollTrigger(".auxilary-block", ".auxilary-block", .3);
animateElementWithScrollTrigger(".footer-content", ".footer-content", .3);

animateElementWithScrollTrigger(".service-list-title-and-description-block", ".service-list-title-and-description-block", .3);
animateElementWithScrollTrigger(".service-list-tabs", ".service-list-tabs", .3);
animateElementWithScrollTrigger(".testimonial-block", ".testimonial-block", .3);
animateElementWithScrollTrigger(".testimonial-owl-carousel", ".testimonial-owl-carousel", .3);
animateElementWithScrollTrigger(".contact-data-block", ".contact-data-block", .3);
animateElementWithScrollTrigger(".contact-form-container", ".contact-form-container", .6);
animateElementWithScrollTrigger(".about-title-and-description", ".about-title-and-description", .3);
animateElementWithScrollTrigger(".fa-title-and-description", ".fa-title-and-description", .3);
animateElementWithScrollTrigger(".fa-accordion-cell", ".fa-accordion-cell", .6);
animateElementWithScrollTrigger(".team-title-block", ".team-title-block", .3);
animateElementWithScrollTrigger(".team-grid", ".team-grid", .3);

animateElementWithScrollTrigger(".htcv-block", ".htcv-block", .3);
animateElementWithScrollTrigger(".htcv-image-container", ".htcv-image-container", .3);
animateElementWithScrollTrigger(".ftvt-blocks", ".ftvt-blocks", .3);
animateElementWithScrollTrigger(".tabs-menu-3", ".tabs-menu-3", .3);
animateElementWithScrollTrigger(".ftvt-tab-content", ".ftvt-tab-content", .3);
animateElementWithScrollTrigger(".two-up-container-list-title-block", ".two-up-container-list-title-block", .3);
animateElementWithScrollTrigger(".two-up-container-list-card-active", ".two-up-container-list-card-active", .3);
animateElementWithScrollTrigger(".two-up-container-list-card", ".two-up-container-list-card", .3);
animateElementWithScrollTrigger(".cta-centered-video-container-block", ".cta-centered-video-container-block", .3);
animateElementWithScrollTrigger(".related-pages-title-block", ".related-pages-title-block", .3);
animateElementWithScrollTrigger(".text-page-blocks-card", ".related-pages-block", .3);

animateElementWithScrollTrigger(".text-page-blocks-card-1", ".text-page-blocks-card-1", .3);
animateElementWithScrollTrigger(".text-page-blocks-card-2", ".text-page-blocks-card-2", .6);
animateElementWithScrollTrigger(".text-page-blocks-card-3", ".text-page-blocks-card-3", .9);
animateElementWithScrollTrigger(".blog-block", ".blog-block", .3);
animateElementWithScrollTrigger(".blog-featured-image", ".blog-featured-image", .3);
animateElementWithScrollTrigger(".blog-content", ".blog-content", .3);


  });
  
