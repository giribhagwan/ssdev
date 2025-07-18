/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";

	
		//add some elements with animate effect

		$(".big-cta").hover(
			function () {
			$('.cta a').addClass("animated shake");
			},
			function () {
			$('.cta a').removeClass("animated shake");
			}
		);
		$(".box").hover(
			function () {
			$(this).find('.icon').addClass("animated fadeInDown");
			$(this).find('p').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('.icon').removeClass("animated fadeInDown");
			$(this).find('p').removeClass("animated fadeInUp");
			}
		);
		
		
		// Updated accordion events to use Bootstrap collapse with panel structure
		$('.panel-group').on('show.bs.collapse', function (e) {
			var $target = $(e.target);
			$target.siblings('.panel-heading').find('i.fa').removeClass('fa-angle-right').addClass('fa-angle-down');
		});
		
		$('.panel-group').on('hide.bs.collapse', function (e) {
			var $target = $(e.target);
			$target.siblings('.panel-heading').find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-right');
		});	

		
		// tooltip
		$('.social-network li a, .options_box .color a').tooltip();

		// fancybox
		$(".fancybox").fancybox({				
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});

		
		//scroll to top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
				} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
    $('#post-slider').flexslider({
        // Primary Controls
        controlNav          : false,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });
	
    $('#main-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "fade",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : true,              //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : true,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });

    // Mobile Navigation Enhancements
    $(document).ready(function() {
        // Close mobile menu on item click
        $('.navbar-nav li a').on('click', function(){
            if (!$(this).parent().hasClass('dropdown')) {
                $('.navbar-collapse').collapse('hide');
                $('body').removeClass('nav-open'); // Remove nav-open when link is clicked
            }
        });

        // Add nav-open class to body when navbar is open
        $('.navbar-toggle').on('click', function() {
            setTimeout(function() {
                if ($('.navbar-collapse').hasClass('in')) {
                    $('body').addClass('nav-open');
                } else {
                    $('body').removeClass('nav-open');
                }
            }, 350); // match the CSS transition
        });

        // Add touch support for dropdown menus
        if ('ontouchstart' in document.documentElement) {
            $('.dropdown-toggle').on('click', function(e) {
                if ($(this).parent().hasClass('open')) {
                    window.location = $(this).attr('href');
                }
            });
        }
        

        // Smooth scrolling for anchor links
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });

        // Handle viewport height on mobile devices
        function setMobileViewportHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        setMobileViewportHeight();
        window.addEventListener('resize', setMobileViewportHeight);

        // Add swipe support for carousels
        $(".carousel").swipe({
            swipe: function(event, direction) {
                if (direction === 'left') {
                    $(this).carousel('next');
                }
                if (direction === 'right') {
                    $(this).carousel('prev');
                }
            },
            allowPageScroll: "vertical"
        });

        // Lazy loading for images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }

        // Handle orientation changes
        window.addEventListener('orientationchange', function() {
            // Reset any necessary layouts
            $('.navbar-collapse').collapse('hide');
            // Trigger resize event for any responsive elements
            window.dispatchEvent(new Event('resize'));
        });
    });

});

// Add this JavaScript to your js/custom.js file or create a new JS file
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive hover effects
    document.querySelectorAll('.modern-course-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click animation to buttons
    document.querySelectorAll('.modern-course-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add your enrollment logic here
            alert('Redirecting to enrollment page...');
            // window.location.href = 'enrollment.html';
        });
    });
});

// Countdown to 1st July 2025
(function() {
  var countdownElem = document.getElementById('javaCountdownValue');
  if (!countdownElem) return;
  var launchDate = new Date('2025-07-01T00:00:00+05:30'); // Adjust timezone if needed

  function updateCountdown() {
    var now = new Date();
    var diff = launchDate - now;
    if (diff <= 0) {
      countdownElem.textContent = "Launched!";
      return;
    }
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var mins = Math.floor((diff / (1000 * 60)) % 60);
    var secs = Math.floor((diff / 1000) % 60);
    countdownElem.textContent =
      days + "d " + hours + "h " + mins + "m " + secs + "s";
    setTimeout(updateCountdown, 1000);
  }
  updateCountdown();
})();
document.addEventListener('DOMContentLoaded', () => {
      AOS.init({ once: true });
    });
function openModal() {
    document.getElementById("notifyModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("notifyModal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("notifyModal");
    if (event.target == modal) {
      closeModal();
    }
  };
function openModal() {
    document.getElementById("notifyModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("notifyModal").style.display = "none";
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }

  // Optional: Detect form submit based on redirect or iframe load
  const iframe = document.getElementById("googleForm");
  iframe.onload = function () {
    if (iframe.src.includes("formResponse")) {
      closeModal();
      showToast("✅ Response submitted!");
    }
  };

  window.onclick = function (event) {
    if (event.target == document.getElementById("notifyModal")) {
      closeModal();
    }
  };
  AOS.init();

    // Countdown Timer
    const countdown = document.getElementById("countdown");
    const eventDate = new Date("July 20, 2025 11:00:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(x);
        countdown.innerHTML = "⏳ Workshop has started!";
        const registerBtn = document.getElementById("register-btn");
        if (registerBtn) registerBtn.style.display = "none";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    // Seat Progress Bar
    const totalSeats = 50;
    const filledSeats = 42;
    const seatProgress = document.getElementById("seatProgress");
    seatProgress.style.width = `${(filledSeats / totalSeats) * 100}%`;
    seatProgress.textContent = `${filledSeats}/${totalSeats} Seats Filled`;