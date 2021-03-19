// about page toggle
$(".about-content").on('click', function() {
	const className = $(this).text().toLowerCase().trim();
	// add class to about header
	$(".about-header h2").removeClass("about-active");
	$(`#${className}-header`).addClass("about-active");
	
	// change content
	$(".about-details p").removeClass("about-active");
	$(`#${className}`).addClass("about-active");
});

