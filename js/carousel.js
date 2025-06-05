
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize Bootstrap carousel with interval
    const carousel = document.querySelector('#carousel-example-generic');

    if (carousel) {
      // Use Bootstrap's Carousel API
      const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000,  // Change slide every 5 seconds
        ride: 'carousel',
        pause: false,    // Continue even when hovered
        wrap: true       // Loop back to start after last
      });
    }
  });

