// ----------Gallery-Bulit-in-script------------
$(function () {

	var filterList = {

		init: function () {

			// https://mixitup.kunkalabs.com/
			$('#gallery').mixItUp({
				selectors: {
					target: '.gallery-item',
					filter: '.filter'
				},
				load: {
					filter: '.print, .strategy, .logo, .web' // show all items on page load.
				}
			});

		}

	};

	// Filter ALL the things
	filterList.init();

});


//----------TopNav-search----------
$("#search").click(() => {
	$("#topNav-inp").toggleClass("active")
})
// ----------Bottom-Search--------
$("#btm-search").click(()=>{
	$("#btmNav-inp").toggleClass("active")
})
// -------------Sidebar-------------
if ($("#menu-btn")) {
	$("#menu-btn").click(function () {
		$(".sidebar").addClass("active")
	});
	$("#cross").click(() => {
		$(".sidebar").removeClass("active")

	})

}
// -----------Filter Section-----------

$(".filter").on("click", function () {
	$("#first-li").removeClass("actives")
})

// -------------Sell-Sec-Magnifier--------------



// -------------Downlaod-Sec-Image-Slider--------------
$(function(){
  $(".beforeafterdefault").cndkbeforeafter({
		showText:false,
		mode:"drag",
		seperatorWidth:"4px",
		seperatorColor:'#8c4f00',
		opacity:1
	});
});