// Fixed header
let header = $("#header");
let intro = $("#intro");
let introH;
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function() {
	let introH = intro.innerHeight();
	scrollPos = $(this).scrollTop();
	if(scrollPos > introH) {
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
});

//Scroll
$("[data-scroll]").on("click", function(event) {
	event.preventDefault();
	var blockId = $(this).data('scroll'),
	blockOffset = $(blockId).offset().top;

	$("html, body").animate({
		scrollTop: blockOffset
	}, 700);
});


// Nav Toggle
let nav = $("#nav");
let navToggle = $("#navToggle");
navToggle.on("click", function(event){
	event.preventDefault();
	nav.toggleClass("show");
});



// SkillBarAnimation
$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	}, 2000);
});

// CounterAnimation
$('.numbers__title').each(function () {
	$(this).prop('counter',0).animate({
		counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	});
});

// Go to top
var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 20){
		$btnTop.fadeIn();
	} else {
		$btnTop.fadeOut();
	}
});

$(".btn-top").on("click", function(){
	$("html,body").animate({scrollTop:0},1500)
});

