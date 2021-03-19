// about page toggle
$(".about-content").on('click', function() {
	const className = $(this).text().toLowerCase().trim();
	// add class to about header
	$(".about-header h2").removeClass("about-active");
	$(`#${className}-header`).addClass("about-active");
	
	// change pointer
	$(".timeline div").removeClass("right");
	$(this).parent().addClass("right");
	// change content
	$(".about-details p").removeClass("about-active");
	$(`#${className}`).addClass("about-active");
});

// about page toggle
// $(".content").on('click', function() {
// 	const className = $(this).text().toLowerCase().trim();
	
// 	// change content
// 	$(".about-details p").removeClass("about-active");
// 	$(`#${className}`).addClass("about-active");
// });
