// about page toggle
$(".about-content").on('click', function() {
	const className = $(this).text().toLowerCase().trim();
	// add class to about header
	$(".about-header h2").removeClass("about-active");
	$(`#${className}-header`).addClass("about-active");
});

// $(".about-content").on('click', function() {
// 	const className = $(this).text().toLowerCase().trim();
// 	// add class to about header
// 	$(".about-header h2").removeClass("about-active");
// 	$(`#${className}-header`).addClass("about-active");
	
// 	// change pointer
// 	$(".timeline div").removeClass("right");
// 	$(this).parent().addClass("right");

// 	// change content
// 	$(".about-details p").removeClass("about-active");
// 	$(`#${className}`).addClass("about-active");

// 	// change icon
// 	// $(".about-ul li").removeClass("about-li-active");
// 	// console.log(className)
// 	// $(`#${className}-li`).addClass("about-li-active");
// });

// about page toggle
// $(".content").on('click', function() {
// 	const className = $(this).text().toLowerCase().trim();
	
// 	// change content
// 	$(".about-details p").removeClass("about-active");
// 	$(`#${className}`).addClass("about-active");
// });
