$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".assassin").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".fighter").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".mage").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".marksman").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".tank").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
	$("#line-progress").css("width", "100%");
	$(".support").addClass("active").siblings().removeClass("active");
});