/* читать полностью */
$(document).on("click", ".learn_all", function(){
	alert("читать полностью ");
});
/* поиск по сайту */
$(document).on("click", ".search_icon", function(){
	$(".link_in_header").css("display", "none");
	$(".search_block").slideDown(300);
	$(".search_icon").css("display", "none");
});
/* скрытие блока поиска */
$(document).on("click",".body_back", function(){
	$(".search_block").css("display", "none");
	$(".link_in_header").css("display", "block");
	$(".search_icon").slideDown(300);
})
$(document).on("click",".search_query_button", function(){
	let query_user = $(".search_block input").val();
	alert(query_user);
})


/* поиск по сайту мобильное меню */
$(document).on("click", ".search_icon_mobile", function(){
	$(".search_mobile_block").slideDown(300);
	$(".search_icon_mobile").css("display", "none");
});
/* скрытие блока поиска мобильное меню */
$(document).on("click",".body_back", function(){
	$(".search_mobile_block").css("display", "none");
	$(".search_icon_mobile").slideDown(300);
})
$(document).on("click",".search_query_button_mobile", function(){
	let query_user = $(".search_mobile_block input").val();
	alert(query_user);
})


/* открытие/скрфтие мобильного меню */
$(document).on("click", ".menu_sendvich", function(){
	$(".mobile_menu_back").slideDown(500);
})
$(document).on("click", ".close", function(){
	$(".mobile_menu_back").slideUp(500);
})