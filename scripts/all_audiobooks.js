let books = [
	{name: "Фёдор Достоевский", book: "Идиот", link: "test1.html", img: "images/1005626147.jpg"},
	{name: "Иоган Вольфганг Гёте", book: "Фауст", link: "test2.html", img: "images/1005685145.jpg"},
	{name: "Лев Толстой", book: "Анна Каренина", link: "test3.html", img: "images/1005685170.jpg"},
	{name: "Фёдор Достоевский", book: "Преступление и наказание", link: "test4.html", img: "images/1005685179.jpg"},
	{name: "Михаил Булгаков", book: "Собачье сердце", link: "test5.html", img: "images/1007528184.jpg"},
	{name: "Михаил Булгаков", book: "Мастер и Маргарита", link: "test6.html", img: "images/1011707407.jpg"},
	{name: "Авто 7", book: "Книга 7", link: "test7.html", img: "images/whatsbook.jpg"},
	{name: "Авто 8", book: "Книга 8", link: "test8.html", img: "images/whatsbook.jpg"},
	{name: "Авто 9", book: "Книга 9", link: "test9.html", img: "images/whatsbook.jpg"},
	{name: "Авто 10", book: "Книга 10", link: "test10.html", img: "images/whatsbook.jpg"},
	{name: "Авто 11", book: "Книга 11", link: "test11.html", img: "images/whatsbook.jpg"},
	{name: "Авто 12", book: "Книга 12", link: "test12.html", img: "images/whatsbook.jpg"},
	{name: "Авто 13", book: "Книга 13", link: "test13.html", img: "images/whatsbook.jpg"},
	{name: "Авто 14", book: "Книга 14", link: "test14.html", img: "images/whatsbook.jpg"},
	{name: "Авто 15", book: "Книга 15", link: "test15.html", img: "images/whatsbook.jpg"},
];

let section = document.querySelector(".books_all")
let notesOnPage = 4;

let pages = document.querySelector(".pages");
let active;
let countPage = Math.ceil(books.length/notesOnPage);
let items = [];
for(let i =1; i<=countPage; i++){
	let num_page = document.createElement("a");
	num_page.classList.add("num_page");
	num_page.setAttribute("href", "#");
	num_page.innerHTML = i;
	pages.appendChild(num_page);
	items.push(num_page);
}
window.onload=function(){
		let firstPage = document.querySelector(".num_page");
		firstPage.classList.add('page_active');
		let pageNum = 1;
		showInfo(pageNum);
}
for(let item of items){
	item.addEventListener('click', showBooks);
}
function showBooks(){
		if(active){
			active.classList.remove("page_active");
		}
		active = this;
		this.classList.add('page_active');
		section.innerHTML = "";
		let pageNum = +this.innerHTML;
		showInfo(pageNum);
}
function showInfo(pageNum){
		let start = (pageNum-1)*notesOnPage;
		let end = start+notesOnPage;
		let notes = books.slice(start, end);
		for(let note of notes){

			let book_block = document.createElement('div');
			book_block.classList.add("book_block");
			section.appendChild(book_block);
			
			let book_image = document.createElement('img');
			book_image.classList.add("book_image");
			book_image.setAttribute("src",note.img);
			book_block.appendChild(book_image);

			let book_info = document.createElement('div');
			book_info.classList.add("book_info");
			book_block.appendChild(book_info);

			let div_book_info = document.createElement('div');
			book_info.appendChild(div_book_info);

			let book_text = document.createElement('p');
			book_text.classList.add("book_text");
			book_text.innerHTML = note.name;
			div_book_info.appendChild(book_text);

			let book_name = document.createElement("h2");
			book_name.classList.add("book_name");
			book_name.innerHTML = note.book;
			div_book_info.appendChild(book_name);

			let book_link = document.createElement("button");
			book_link.classList.add("book_link");
			book_link.setAttribute("data-link", note.link);
			book_link.innerHTML = "слушать";
			div_book_info.appendChild(book_link);		

		}
}
$(document).on("click", ".book_link", function(){
	let data_link = $(this).attr("data-link");
	alert(data_link);
})