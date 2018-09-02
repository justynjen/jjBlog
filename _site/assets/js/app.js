// window.onload = function() {
//   $('#loading').fadeOut(250, function() {
//     $(this).remove();
//   });
// };


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



  $('p').each(function() {
    var $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
  });



  // --------------------------------------------------
  // Is On Screen
  // --------------------------------------------------

  var winScrollTop=0;

  $.fn.is_on_screen = function(){
      var win = $(window);
      var viewport = {
          top : win.scrollTop(),
          left : win.scrollLeft()
      };
      //viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      var bounds = this.offset();
      //bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();
      return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };



  // --------------------------------------------------
  // Parallax
  // --------------------------------------------------
  function parallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax').each(function() {
      var speed = $(this).attr('data-speed');
      var firstTop = $(this).offset().top;
      var moveTop = (firstTop-winScrollTop)*0.5;

      if ($(this).is('#intro.parallax')) {
        // $(this).css('background-position-y',(0+(scrolled*speed))+'px');
        $(this).css('background-position-y','calc(100% + '+(0+(scrolled*speed))+'px)');
      }

      else {
        $(this).css('background-position-y',(0-(moveTop*speed))+'px');
        // $(this).css('transform','translateY('+(0+(scrolled*speed))+'px)');
      }
    });
  }

  $(window).scroll(function(){
    winScrollTop = $(this).scrollTop();
    parallax();
  });





  jQuery(document).ready(function(){
    $(window).scroll(function(e){
    	parallaxScroll();
  	});

  	function parallaxScroll(){
  		var scrolled = $(window).scrollTop();
      $('#bg').css('transform','translateY('+(0+(scrolled*.1))+'px)');
  	}

   });
});
