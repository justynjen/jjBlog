$(document).ready(function(){
  // --------------------------------------------------
  // Mobile Nav
  // --------------------------------------------------

  $(function() {
    $('.nav-trigger').click( function(event){
      event.stopPropagation();
      $('.mobile-nav').toggleClass('open');
      $('body').toggleClass('nav-is-visible');
    });

    $(".close, .mobile-nav a").click( function(){
      $('.mobile-nav').removeClass('open');
      $('body').removeClass('nav-is-visible');
    });
  });


  // --------------------------------------------------
	// Scroll to section anchors
  // --------------------------------------------------

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 0
          }, 500);
          return false;
        }
      }
    });
  });



  // --------------------------------------------------
  // Slider
  // --------------------------------------------------
  $('.slider').slick({
    prevArrow: '<a class="arrow-left"></a>',
    nextArrow: '<a class="arrow-right"></a>',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('p, h3').each(function() {
    var $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
  });

  $("p:has(img)").before(function() { // or use .after()
    return $(this).find("img");
  });

  $("p:empty").remove();
});


$(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 420) {
  $(".nav-trigger").addClass("fixed");
} else {
  $(".nav-trigger").removeClass("fixed");
}
});
