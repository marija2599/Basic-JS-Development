

function Book(bookName, bookAuthor) {
    this.title = bookName;
    this.author = bookAuthor;
    this.readingStatus = true
}


let book1 = new Book('It happend at one wedding', 'Julie James');
let book2 = new Book('The power of your subconscious mind', 'Joseph Murphy');
let book3 = new Book(`A Tale of Two Cities`, 'Charles Dickens');
book3.readingStatus = false;
function pushBooks(a, b, c) {
    let books = [];
    books.push(a, b, c);
    console.log(books);
    return books;
}

pushBooks(book1, book2, book3);










