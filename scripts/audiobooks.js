$(".control_audio img").click(function(){

	function myTimer(){
		let tim = player[0].currentTime;
		let sound = player[0].volume;
		sound = sound*100;
    	timeBlock.text(Math.floor(tim));
    	soundBlock.text(Math.floor(sound));
	}
	let times = setInterval(myTimer, 1000);

	let player = $(this).parent(".control_audio").next();
	let attribute = $(this).attr("alt");
	let timeBlock = $(this).parent(".control_audio").parent(".audio_block").parent("div").children(".audio_info").children(".sound_timer");
	let soundBlock = $(this).parent(".control_audio").parent(".audio_block").parent("div").children(".audio_info").children(".sound_percent");
	if(attribute == "play"){
		player[0].play();
	}
	else if(attribute == "pause"){
		player[0].pause();
	}
	else if(attribute == "stop"){
		player[0].load();
		clearInterval(times);
	}
	else if(attribute == "front"){
		alert("вперёд");
	}
	else if(attribute == "back"){
		alert("назад");
	}

	player[0].onloadeddata = times;
});