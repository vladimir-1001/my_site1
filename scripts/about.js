/* открфтие полноразмерного фото */
$(document).on("mousemove", ".small_foto_block", function(){
	$(this).children(".big").css("display", "block");
});
$(document).on("mouseout", ".big", function(){
	$(this).css("display", "none");
});
$(document).on("click", ".big", function(){
	let attr = $(this).prev("img").attr("src");
	alert(attr);
});