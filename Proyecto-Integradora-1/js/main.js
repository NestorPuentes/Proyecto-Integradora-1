$("#wrapper").click( function() {
	$(".menu-hamburger").toggleClass("close");
});
$(".oscuro").click( function() {
	$(".menu-hamburger").toggleClass("close");
});



$("#menu-toggle").click(function (e){
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});