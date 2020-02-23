let books = [
	{name: "Авто 1", book: "Книга 1", link: "test1.html"},
	{name: "Авто 2", book: "Книга 2", link: "test2.html"},
	{name: "Авто 3", book: "Книга 3", link: "test3.html"},
	{name: "Авто 4", book: "Книга 4", link: "test4.html"},
	{name: "Авто 5", book: "Книга 5", link: "test5.html"},
	{name: "Авто 6", book: "Книга 6", link: "test6.html"},
	{name: "Авто 7", book: "Книга 7", link: "test7.html"},
	{name: "Авто 8", book: "Книга 8", link: "test8.html"},
	{name: "Авто 9", book: "Книга 9", link: "test9.html"},
	{name: "Авто 10", book: "Книга 10", link: "test10.html"},
	{name: "Авто 11", book: "Книга 11", link: "test11.html"},
	{name: "Авто 12", book: "Книга 12", link: "test12.html"},
	{name: "Авто 13", book: "Книга 13", link: "test13.html"},
	{name: "Авто 14", book: "Книга 14", link: "test14.html"},
	{name: "Авто 15", book: "Книга 15", link: "test15.html"},
];

let section = document.querySelector(".books_all")
let notesOnPage = 2;

let pages = document.querySelector(".pages");

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
let active;
for(let item of items){
	item.addEventListener('click', function(){
		if(active){
			active.classList.remove("page_active");
		}
		active = this;

		this.classList.add('page_active');
		section.innerHTML = "";
		let pageNum = +this.innerHTML;

		let start = (pageNum-1)*notesOnPage;
		let end = start+notesOnPage;

		let notes = books.slice(start, end);

		for(let note of notes){
			let book_block = document.createElement('div');
			book_block.classList.add("book_block");
			section.appendChild(book_block);
			
			let book_image = document.createElement('img');
			book_image.classList.add("book_image");
			book_image.setAttribute("src","images/1005685170.jpg");
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
			book_link.innerHTML = "читать книгу";
			div_book_info.appendChild(book_link);			

		}

	})
}