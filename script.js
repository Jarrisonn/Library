let library = [];
const container = document.querySelector(".container");
const bookContainer = document.createElement("div");
const addBookBtn = document.createElement("button");
const form = document.getElementById("form")
const closeAddBookBtn = document.createElement("button");
const bookDiv = document.createElement("div");
const titleInput = document.getElementById("titleinput");
const authorInput = document.getElementById("authorinput");
const numberOfPagesInput = document.getElementById("nopinput");
const hasBeenRead = document.getElementById("read");
const notBeenRead = document.getElementById("notread");
const addBookSubmitButton = document.getElementById("submitbook")

bookContainer.classList.add("bookcontainer");





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
  library.forEach((book, i) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerText = `Title: ${book.title}, 
        Author: ${book.author}, 
        Number of Pages: ${book.numberOfPages}, 
        Have i read the book?: ${book.read}`;

    //create delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.addEventListener("click", () => {
        library.splice(i,1);
        console.log(library)
        bookDiv.remove(i);
        

    })
    bookDiv.appendChild(deleteButton)
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
        bookContainer.style.opacity = 0
        
        
      });
}

closeAddBookBtn.addEventListener("click", e => {
    e.preventDefault();
    form.classList.toggle("form")
    form.classList.toggle("hidden")
    bookContainer.innerHTML = "";
    displayBooks();
    clearForm();
    bookContainer.style.opacity = 1
    
})


getUserInputtedData = () => {
    addBookSubmitButton.addEventListener("click", e => {
        e.preventDefault();
        let title = form.elements[0].value
        let author = form.elements[1].value
        let noPages = form.elements[2].value
        let readOrNot = document.querySelector("input[name=hasbeenread]:checked").value;
        const newBook = new Book(`${title}`, `${author}`, `${noPages}`,`${readOrNot}`);
        library.push(newBook);
        bookContainer.innerHTML = "";
        displayBooks();
        clearForm();
        console.log(library)
        console.log(newBook)
        console.log(form.elements)
    })
}
clearForm = () => {
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements[3].checked = false;
    form.elements[4].checked = false;
}



closeAddBookBtn.innerText = "X"
closeAddBookBtn.classList.add("close");
form.appendChild(closeAddBookBtn);



addBookToLibrary();
displayBooks();
showForm();
getUserInputtedData();
