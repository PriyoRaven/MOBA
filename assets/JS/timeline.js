$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
	$(this).prevAll().removeClass("active");
});

$(".step01").click( function() {
	$(".assassin").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$(".fighter").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$(".mage").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$(".marksman").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$(".tank").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
	$(".support").addClass("active").siblings().removeClass("active");
});