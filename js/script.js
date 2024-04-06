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
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("slideshow-dots")[0].getElementsByTagName("span");
    if (n > 3) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = 3;
    }
    for (i = 0; i < 3; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* 
---------------------------------------------
ref
--------------------------------------------- 
*/

function showRef(url) {
	window.open(url);
}




