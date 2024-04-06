/* 
---------------------------------------------
index
--------------------------------------------- 
*/

(function ($) {
	
	// Menu Dropdown Toggle
	$(".menu-trigger").on('click', function () {
	  $(this).toggleClass('active');
	  $('.header-area .nav').slideToggle(200);
	});
  
	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  var width = $(window).width();
		  if (width < 991) {
			$('.menu-trigger').removeClass('active');
			$('.header-area .nav').slideUp(200);
		  }
		  $('html,body').animate({
			scrollTop: (target.offset().top) - 130
		  }, 700);
		  return false;
		}
	  }
	});
  
	$(document).ready(function () {
	  $(document).on("scroll", onScroll);
  
	  // Smooth scroll
	  $('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
  
		$('a').each(function () {
		  $(this).removeClass('active');
		})
		$(this).addClass('active');
  
		var target = this.hash;
		var menu = target;
		var target = $(this.hash);
		$('html, body').stop().animate({
		  scrollTop: (target.offset().top) - 130
		}, 500, 'swing', function () {
		  window.location.hash = target;
		  $(document).on("scroll", onScroll);
		});
	  });
	});
  
	function onScroll(event) {
	  var scrollPos = $(document).scrollTop();
	  $('.nav a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
		  $('.nav ul li a').removeClass("active");
		  currLink.addClass("active");
		} else {
		  currLink.removeClass("active");
		}
	  });
	}
  
	// Page loading animation
	$(window).on('load', function () {
	  if ($('.cover').length) {
		$('.cover').parallax({
		  imageSrc: $('.cover').data('image'),
		  zIndex: '1'
		});
	  }
  
	  $("#preloader").animate({
		'opacity': '0'
	  }, 600, function () {
		setTimeout(function () {
		  $("#preloader").css("visibility", "hidden").fadeOut();
		}, 300);
	  });
	});
  
	// Window Resize Mobile Menu Fix
	function mobileNav() {
	  var width = $(window).width();
	  $('.submenu').on('click', function () {
		if (width < 992) {
		  $('.submenu ul').removeClass('active');
		  $(this).find('ul').toggleClass('active');
		}
	  });
	}
  })(window.jQuery);

function zoomIn(element) {
    element.classList.add('zoom');
    var message = element.querySelector('.message');
    if (!message) {
        element.insertAdjacentHTML('beforeend', '<p class="message">Click to see more.</p>');
    }
    element.messageElement = element.querySelector('.message');
}

function zoomOut(element) {
    element.classList.remove('zoom');
    if (element.messageElement) {
        element.messageElement.remove();
        delete element.messageElement;
	}
}

function playVideo(containerId, playerId) {
    document.getElementById(containerId).style.display = 'block';
    document.getElementById(playerId).play();
}

function closeVideo(containerId, playerId) {
	alert("The video is ended.");
	document.getElementById(containerId).style.display = 'none';
	document.getElementById(playerId).pause();	
}

function closeVideoOutside(containerId, playerId) {
    var videoContainer = document.getElementById(containerId);
    videoContainer.addEventListener('click', function(event) {
      if (event.target == this) {
		document.getElementById(containerId).style.display = 'none';
		document.getElementById(playerId).pause();	
      }
    });
  }

/* 
---------------------------------------------
discovery
--------------------------------------------- 
*/
$(document).ready(function() {
    var slides = $('.slideshow img');
    var dotsContainer = $('.slideshow-dots');
    var dots = '';

    // Create dots for each slide
    for (var i = 0; i < slides.length; i++) {
      dots += '<span></span>';
    }
    dotsContainer.html(dots);

    var currentIndex = 0;
    var interval;

    // Show current slide and activate corresponding dot
    function showSlide(index) {
      slides.removeClass('active');
      dotsContainer.find('span').removeClass('active');
      slides.eq(index).addClass('active');
      dotsContainer.find('span').eq(index).addClass('active');
    }

    // Start slideshow automatically
    function startSlideshow() {
      interval = setInterval(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }, 2000); // Adjust the delay between slides (in milliseconds) as needed
    }

    // Stop slideshow
    function stopSlideshow() {
      clearInterval(interval);
    }

    // Show next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // Show previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    // Start slideshow on page load
    startSlideshow();

    // Handle dot click event
    dotsContainer.on('click', 'span', function() {
      currentIndex = $(this).index();
      showSlide(currentIndex);
      stopSlideshow();
    });

    // Handle next button click event
    $('.slideshow-next').on('click', function() {
      nextSlide();
      stopSlideshow();
    });

    // Handle previous button click event (optional)
    // $('.slideshow-prev').on('click', function() {
    //   prevSlide();
    //   stopSlideshow();
    // });
  });
/* 
---------------------------------------------
ref
--------------------------------------------- 
*/

function showRef(url) {
	window.open(url);
}




