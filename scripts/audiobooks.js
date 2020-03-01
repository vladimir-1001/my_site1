

/* Загрузка аудиокниг */
(function(){
	let audio_books_all = [
	{name_book: "Книга 1", link_book: "audio/play_1.mp3"},
	{name_book: "Книга 2", link_book: "audio/play_1.mp3"},
	{name_book: "Книга 3", link_book: "audio/play_1.mp3"},
	{name_book: "Книга 4", link_book: "audio/play_1.mp3"},
	{name_book: "Книга 5", link_book: "audio/play_1.mp3"},
	];
	let block = document.querySelector(".popular_audio");
	let count_books = audio_books_all.length;
	for(let book_audio in audio_books_all){
		let myDiv = document.createElement("div");
		block.appendChild(myDiv);

		let book_name = document.createElement("p");
		book_name.classList.add("audio_name");
		book_name.innerHTML = book_audio.name_book;
		myDiv.appendChild(book_name);

		let myAudioBlock = document.createElement("div");
		myAudioBlock.classList.add("audio_block");
		myDiv.appendChild(myAudioBlock);

		let myControlAudio = document.createElement("div");
		myControlAudio.classList.add("control_audio");
		myAudioBlock.appendChild(myControlAudio);
		
		let audio_book = document.createElement("audio");
		audio_book.classList.add("audio_book");
		audio_book.setAttribute("src", "audio/play_1.mp3");
		myAudioBlock.appendChild(audio_book);

		let back = document.createElement("img");
		back.setAttribute("src","images/icons/back.svg");
		back.setAttribute("alt","back");
		myControlAudio.appendChild(back);

		let stop = document.createElement("img");
		stop.setAttribute("src","images/icons/stop.svg");
		stop.setAttribute("alt","stop");
		myControlAudio.appendChild(stop);

		let play = document.createElement("img");
		play.setAttribute("src","images/icons/play.svg");
		play.setAttribute("alt","play");
		myControlAudio.appendChild(play);

		let pause = document.createElement("img");
		pause.setAttribute("src","images/icons/pause.svg");
		pause.setAttribute("alt","pause");
		myControlAudio.appendChild(pause);

		let front = document.createElement("img");
		front.setAttribute("src","images/icons/front.svg");
		front.setAttribute("alt","front");
		myControlAudio.appendChild(front);

		let myAudioInfo = document.createElement("div");
		myAudioInfo.classList.add("audio_info");
		myDiv.appendChild(myAudioInfo);

		let sound_percent = document.createElement("p");
		sound_percent.classList.add("sound_percent");
		sound_percent.innerHTML = "__";
		myAudioInfo.appendChild(sound_percent);

		let sound_timer = document.createElement("p");
		sound_timer.classList.add("sound_timer");
		sound_timer.innerHTML = "__";
		myAudioInfo.appendChild(sound_timer);

		let sound_off = document.createElement("p");
		sound_off.classList.add("sound_off");
		sound_off.classList.add("sound_control");
		myAudioInfo.appendChild(sound_off);

		let sound_down = document.createElement("p");
		sound_down.classList.add("sound_down");
		sound_down.classList.add("sound_control");
		myAudioInfo.appendChild(sound_down);

		let sound_up = document.createElement("p");
		sound_up.classList.add("sound_up");
		sound_up.classList.add("sound_control");
		myAudioInfo.appendChild(sound_up);
	}
	}());

/* управление аудиоплеером */
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
/* Регулировка уровня звука */
$(".sound_control").click(function(){
	let sound_butt = $(this).attr("class");
	let pleer = $(this).parent(".audio_info").parent("div").children(".audio_block").children(".audio_book");
	let sound_info = $(this).parent(".audio_info").parent("div").children(".audio_info").children(".sound_percent");
	if(sound_butt.indexOf("sound_off") != -1){
		pleer[0].muted == false ? pleer[0].muted = true : pleer[0].muted = false;
	}
	if(sound_butt.indexOf("sound_down") != -1){
		if(pleer[0].volume <= 0.005){
			return false;
		}
		pleer[0].volume -= 0.1;
		sound_info.text(Math.floor(pleer[0].volume*100));
	}
	if(sound_butt.indexOf("sound_up") != -1){
		if(pleer[0].volume >= 1){
			return false;
		}
		pleer[0].volume += 0.1;	
		sound_info.text(Math.floor(pleer[0].volume*100));
	}
})
/* Открытие страницы Все аудиокниги */
$(".all_audiobooks").click(function(){
	document.location.href="all_audiobooks.html";
})