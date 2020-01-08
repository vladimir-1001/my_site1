/* показ/сокрытие формы Отправить мнение */
$(document).on("click", ".user_opinion_button", function(){
	let textBlock = $(".user_opinion_button").text();
	if(textBlock == "Нажмите, чтобы поделиться мнением"){
		$(".user_opinion_button").text("Закрыть форму");
	}
	else{
		$(".user_opinion_button").text("Нажмите, чтобы поделиться мнением");
	}
	$(".user_opinion").slideToggle(500);
});


/* отправка мнения */
$(document).on("click", ".send_opinion", function(){
	let login = $(".input_user_name").val();
	let pass = $(".input_user_pass").val();
	let mess = $(".input_user_message").val();
	alert("login - "+ login  +"\npass - "+ pass  + "\nmess - "+ mess);
	$(".user_opinion").slideUp(500);
	$(".user_opinion_button").text("Нажмите, чтобы поделиться мнением");
	$(".user_opinion_down").children("span").text("Здесь будет сообщение");
	setTimeout(empt, 5000);
});
let empt = ()=>{
	$(".user_opinion_down").children("span").empty();
}