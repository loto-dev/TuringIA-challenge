$(function () {
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        $('nav').toggleClass('navbar-dark', $(this).scrollTop() < 50);
        $('nav').toggleClass('navbar-light', $(this).scrollTop() > 50);

        $('nav .navbar-nav li a').toggleClass('scrolled', $(this).scrollTop() > 50);

        $('#navbarToggler').toggleClass('text-white', $(this).scrollTop() < 50);
        $('#navbarToggler').toggleClass('text-dark', $(this).scrollTop() > 50);

        $('.navbar svg').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
});

$("#Next").click(function(){	
    $("div").animate({left: '-=250px'})    
});

$("#Prev").click(function(){
	$("div").animate({left: '+=250px'})
});