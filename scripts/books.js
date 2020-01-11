/* слайдер */
$(document).on("click", ".slider_butt", function(){	
	let nowShift = $(this).parent(".buttons_slider").prev(".slide_all").css("right");
	nowShift = parseInt(nowShift);
	let arr = $(this).attr("class");
	let allSlides = $(this).parent(".buttons_slider").prev(".slide_all").children(".slide");
	let sliders = allSlides.length;
	let slide_width = $(this).parent(".buttons_slider").prev(".slide_all").children(".slide").width();
	let marginL =  $(this).parent(".buttons_slider").prev(".slide_all").children(".slide").css("marginRight");
	marginL = parseInt(marginL);
	let shift = slide_width + marginL;
	let longAllSlides = shift*sliders-marginL;
	if(arr.indexOf("button_left")!= -1){
		if(nowShift<=0){
			$(this).parent(".buttons_slider").prev(".slide_all").animate({"right" : "+="+(longAllSlides-(shift*4-marginL))+"px"});
		}
		else{
			$(this).parent(".buttons_slider").prev(".slide_all").animate({"right" : "-="+shift+"px"});
		}
	}
	else{
		if(nowShift>=longAllSlides/4){
			$(this).parent(".buttons_slider").prev(".slide_all").animate({"right" : "0px"});
		}
		else{
			$(this).parent(".buttons_slider").prev(".slide_all").animate({"right" : "+="+shift+"px"});
		}
	}

});