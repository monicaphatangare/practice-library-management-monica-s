class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }
    checkOut() {
        this.isAvailable = false;
        console.log(this.title + " is checked out.");
    }
    returnItem() {
        this.isAvailable = true;
        console.log(this.title + " is returned.");
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let book1 = new Book("The Jungle Book", 1, "Rudyard Kipling", "Adventure");
let dvd1 = new DVD("The Lion King", 2, "Jon Favreau", 118);
let magazine1 = new Magazine("Time", 3, 12, "Time USA");

console.log(book1.title);
console.log(book1.author);
console.log(book1.genre);

console.log(dvd1.title);
console.log(dvd1.director);
console.log(dvd1.genre);

console.log(magazine1.title);
console.log(magazine1.issueNumber);
console.log(magazine1.publisher);

book1.checkOut();
console.log(book1.isAvailable);
book1.returnItem();
console.log(book1.isAvailable);