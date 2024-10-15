// ----------Hero-Slider-----------
$('#hero-carousel').owlCarousel({
	loop: true,
	margin: 10,
	navText: [
		'<i class="bx bx-left-arrow-alt"></i>',
		'<i class="bx bx-right-arrow-alt"></i>'
	],
	nav: true,
	dots: false,
	items: 1
})

// ----------Client-sec-----------
$(document).ready(function () {
	function showCarousel() {
		if ($(window).width() <= 900) {
			// Check if Owl Carousel is not initialized
			if (!$('#client-carousel').hasClass('owl-loaded')) {
				$('#client-carousel').owlCarousel({
					loop: true,
					margin: 10,
					nav: false,
					dots: false,
					responsive: {
						0: {
							dots: false,
							items: 5,
							nav: false
						}
					}
				});
			}
		} else {
			// Destroy the carousel and remove the id when screen width is greater than 900px
			
				$('#client-carousel').trigger('destroy.owl.carousel'); // Destroy carousel
				$('#client-carousel').removeClass('owl-loaded'); // Remove the owl carousel class
			
		}
	}

	// Run on window resize
	$(window).resize(function () {
		showCarousel();
	});

	// Run on initial page load
	showCarousel();
});
// ----------Quote-Slider----------
$('#quote-slider').owlCarousel({
	loop: true,
	margin: 100,
	nav: false,
	dots: false,
	responsive: {
		0: {
			dots: false,
			items: 1,
			nav: false
		},


	}
})
