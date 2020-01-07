$(document).on("click", ".fog", function(){
	let heig = $(this).parent(".cut_block").height();
	$(this).children(".fog_img").toggleClass("fog_up");
	if(heig == 480){
		$(this).css("background","none");
		$(this).parent(".cut_block").css("height", "auto");
	}
	else{
		$(this).css("background","linear-gradient(to top, rgba(248, 242, 158, 1), rgba(0, 0, 0, 0))");
		$(this).parent(".cut_block").css("height", "480px");
	}
});