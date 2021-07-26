let library = [];
const container = document.querySelector(".container");
const bookContainer = document.createElement("div");
const addBookBtn = document.createElement("button");
bookContainer.classList.add("bookcontainer");
const form = document.getElementById("form")

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.info = () => {
    return `${this.title}, ${this.author}, ${this.numberOfPages}, ${this.read} `;
  };
}

const lordOfTheRings = new Book(
  "Lord of the Rings",
  "J.R.R Tolkien",
  300,
  true
);
const harryPotter = new Book(
  "Harry potter and the philosophers stone",
  "JK Rowling",
  234,
  false
);
const joshBook = new Book(
  "Jarrison Autobiography",
  "Josh Harrison",
  1000,
  true
);

displayBooks = () => {
  library.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerText = `Title: ${book.title}, 
        Author: ${book.author}, 
        Number of Pages: ${book.numberOfPages}, 
        Have i read the book?: ${book.read}`;
    bookContainer.appendChild(bookDiv);
  });
  container.appendChild(bookContainer);
  

};

addBookToLibrary = () => {
  library.push(lordOfTheRings, harryPotter, joshBook);
  
  addBookBtn.textContent = "Add New Book";
  addBookBtn.classList.add("addbtn");
  container.appendChild(addBookBtn);
};

showForm = () => {
    addBookBtn.addEventListener("click", e => {
        e.preventDefault();
        form.classList.toggle("form")
        form.classList.toggle("hidden")
        
      });
}


addBookToLibrary();
displayBooks();
showForm();