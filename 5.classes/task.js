class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this._state = this._state * 1.5 > 100 ? 100 : this._state * 1.5;
	}

	set state(changeState) {
		if (changeState < 0) {
			this.state = 0;
		}
		if (changeState > 100) {
			this.state = 100;
		} else {
			this.state = changeState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (this._state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const findBook = this.books.find(key => key[type] === value);
		return !!findBook ? findBook : null;
	}

	giveBookByName(bookName) {
		const searchBookByName = this.books.findIndex(book => book.name === bookName);
		return searchBookByName !== -1 ? this.books.splice(searchBookByName, 1)[0] : null;
	}
}
