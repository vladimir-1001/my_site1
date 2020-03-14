/* открфтие полноразмерного фото */
$(document).on("mousemove", ".small_foto_block", function(){
	$(this).children(".big").css("display", "block");
});
$(document).on("mouseout", ".big", function(){
	$(this).css("display", "none");
});

/* Открытие изображения в полный размер */
$(document).on("click", ".big", function(){
	let attr = $(this).prev("img").attr("src");
	$(".open_image_block_back").css("display", "flex");
	$(".image_big").attr("src", attr);
});
/* Закрытие изображения */
$(document).on("click", ".close_show_image_block", function(){
	$(".open_image_block_back").css("display", "none");
	$(".image_big").attr("src", "");
});
/* переключение слайдов */
$(document).on("click", ".arr_big_img", function(){
	let arr = $(this).attr("class");
	let active_image = $(this).parent(".open_image_block_back").children(".show_image_block").children(".image_big");
	let active_image_src = $(this).parent(".open_image_block_back").children(".show_image_block").children(".image_big").attr("src");
	let all_img = [];
	let images = $(".small_foto_img");
	for(let i=0; i<images.length; i++){
		all_img[i] = $(images[i]).attr("src");
		if(all_img[i] == active_image_src){
			if(arr.indexOf("left")!=-1){
				let new_attr = all_img[i-1];
				console.log(new_attr)
				$(".image_big").attr("src", new_attr);
			}
			else{
				let new_attr = all_img[i+1];
				console.log(new_attr)
				$(".image_big").attr("src", new_attr);
			}
			return false;
		}
	}
});



