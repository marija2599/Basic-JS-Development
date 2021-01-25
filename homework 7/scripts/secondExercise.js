// let title = prompt("Enter");
// let author = prompt("Enter")
// let book = {
//     readBooks: ['It happend at one wedding', 'The power of your subconscious mind', 'A brief history of time', 'A Tale of Two Cities'],
//     authorsOfTheReadBooks: ['Julie James', 'Joseph Murphy', 'Stephen Hawking', 'Charles Dickens'],
//     readingStatus: true,
//     returnBookInfo: function (bookName, authorName) {
//         for (let i in this.readBooks) {

//             if (bookName.value == this.readBooks[i] && authorName.value == this.authorsOfTheReadBooks[i]) {
//                 return `Already read "${bookName}" by ${authorName}`;
//             } else {
//                 return `You still need to read "${bookName}" by ${authorName}`;
//             }
//         }
//     }
// }

// console.log(book.returnBookInfo("Some book", "Author of some book"));
// console.log(book.returnBookInfo(title, author));
// //console.log(book.returnBookInfo("It happend at one wedding", "Julie James"));
// console.log(book.returnBookInfo("A brief history of time", "Stephen Hawking"));
// console.log(book.returnBookInfo("A brief history of time", "Julie James"));








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










