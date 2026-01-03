//create a constructor for books
//all book objects stored in array
//add separate  function to script

const bookTitle = document.querySelector('#addBook');
//addBook.addEventListener('click',addBookToLibrary)


const bookAuthor = document.querySelector('addAuthor')
//addAuthor.addEventListener('click',addBookToLibrary)

//constructor for books:
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

}

const myLibrary = [];

//store new book objects in an array
//create first within this fuunction
function addBookToLibrary(title, author, pages){
    const newBook = new Book(title, author, pages)
    newBook.id = crypto.randomUUID() //only works in secure contexts like localhost or https. (live server or local host)
    myLibrary.push(newBook)

}

function displayBook(book){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(book)

    const div = document.createElement("div");
    div.classList.add("book") //adds the class book to the <div> the element now looks like <div class = "book"></div>/// this allows css to style it later
    div.textContent = `${book.title} (${book.pages} pages)`;
    
    document.querySelector("#library").appendChild(div);

}
}
addBookToLibrary("Dune", "Frank Herbert", 412);
console.table(myLibrary); //should show 2 books with ids

displayBook(myLibrary[0]);
displayBook(myLibrary[1]);
//write a function that loops through the array
//and displays each book on the page
//display books as table -- uses html and css or just javascript?

//add a new book button that brings up a form
//so that users can input new book
//use event.preventDefault(); to stop submit from going to a server

//assocaite dom elements with book objects???
//5 and 6
