$(document).ready(function() {
	function checkWidth() {
        var winwidth = $(window).width();

        if (winwidth <= 767) {
            $("#topnav").addClass("tnopacity");
			$("#myname").addClass("mnscrolltop");
			$("#rightsidenav a").addClass("rsnascrolltop");
        }
        
		else {
			$("#topnav").removeClass("tnopacity");
			$("#myname").removeClass("mnscrolltop");
			$("#rightsidenav a").removeClass("rsnascrolltop");
		}
	}
    checkWidth();
    $(window).resize(checkWidth);
	
	$(window).scroll(function() {
		if($(window).width() >= 768) {
			if($(document).scrollTop() > 10) {
				$("#topnav").addClass("tnopacity");
			    $("#myname").addClass("mnscrolltop");
			    $("#rightsidenav a").addClass("rsnascrolltop");
			}
			
			else {
				$("#topnav").removeClass("tnopacity");
			    $("#myname").removeClass("mnscrolltop");
			    $("#rightsidenav a").removeClass("rsnascrolltop");
			}
		}
		
		if($(window).width() < 760) {
			if($(document).scrollTop() > 10) {
				$("#topnav").addClass("tnopacity");
			    $("#myname").addClass("mnscrolltop");
			    $("#rightsidenav a").addClass("rsnascrolltop");
			}
		}
	});
	
	$("#rightsidenav li").click(function() {
		$(".navbar-collapse").collapse("hide");
	});
	
	$("#remo").click(function() {
		$("#readmore").slideToggle(1000, "swing");
	});
	
	/*Nav Scroll Start*/
	$("#home").click(function() {
		$("html, body").animate({
			scrollTop: $("body").offset().top
		}, 2000);
	});
	
	$("#aboutme").click(function() {
		$("html, body").animate({
			scrollTop: $("#whoami").offset().top
		}, 2000);
	});
	
	$("#canhelpwith").click(function() {
		$("html, body").animate({
			scrollTop: $("#helpwith").offset().top
		}, 2000);
	});
	
	$("#portfolio").click(function() {
		$("html, body").animate({
			scrollTop: $("#myportfolio").offset().top
		}, 2000);
	});
	
	$("#blog").click(function() {
		$("html, body").animate({
			scrollTop: $("#myblog").offset().top
		}, 2000);
	});
	
	$("#contactme").click(function() {
		$("html, body").animate({
			scrollTop: $("#getintouch").offset().top
		}, 2000);
	});
	/*Nav Scroll End*/

});