let library = [];
let lsLibrary = JSON.parse(localStorage.getItem("library"));
library = [...lsLibrary]
console.log(library)
console.log(lsLibrary)

const container = document.querySelector(".container");
const bookContainer = document.createElement("div");
const addBookBtn = document.createElement("button");
const form = document.getElementById("form");
const closeAddBookBtn = document.createElement("button");
const bookDiv = document.createElement("div");
const titleInput = document.getElementById("titleinput");
const authorInput = document.getElementById("authorinput");
const numberOfPagesInput = document.getElementById("nopinput");
const hasBeenRead = document.getElementById("read");
const notBeenRead = document.getElementById("notread");
const addBookSubmitButton = document.getElementById("submitbook");

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
    bookDiv.innerText = `Title: ${book.title} 
        Author: ${book.author} 
        Number of Pages: ${book.numberOfPages} 
        Have i read the book?: ${book.read}`;

    
    
    //create delete button
    const deleteButton = document.createElement("button");
    
    deleteButton.classList.add("btn")
    
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
    deleteButton.addEventListener("click", () => {
      library.splice(i, 1);
      bookDiv.remove(i);
      storeLibraryLocal();
      library = [...lsLibrary]
      

    });
    //create read button
    const readButton = document.createElement("button");
    readButton.innerText = "Mark as read";
    readButton.classList.add("btn")
    if(book.read){
      readButton.innerText = "Mark as Unread";
    }else{
      readButton.innerText = "Mark as Read"
    }
    readButton.addEventListener("click", () => {
      if (book.read) {
        book.read = false;
        
      } else {
        book.read = true;
        
      }

      bookContainer.innerHTML = "";
      displayBooks();
      storeLibraryLocal();
      library = [...lsLibrary]

      console.log(book);
    });

    bookDiv.appendChild(deleteButton);
    bookDiv.appendChild(readButton);
    bookContainer.appendChild(bookDiv);
  });
  container.appendChild(bookContainer);
};





addBookToLibrary = () => {
 
  
  addBookBtn.textContent = "Add New Book";
  addBookBtn.classList.add("addbtn");
  container.appendChild(addBookBtn);
};

showForm = () => {
  addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.toggle("form");
    form.classList.toggle("hidden");
    bookContainer.style.opacity = 0;
    closeAddBookBtn.innerHTML = `<i class="fas fa-trash"></i>`
  });
};





closeAddBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.toggle("form");
  form.classList.toggle("hidden");
  bookContainer.innerHTML = "";
  displayBooks();
  clearForm();
  bookContainer.style.opacity = 1;
});

getUserInputtedData = () => {
  addBookSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let noPages = form.elements[2].value;
    let readOrNot = document.querySelector(
      "input[name=hasbeenread]:checked"
    ).value;
    const newBook = new Book(
      `${title}`,
      `${author}`,
      `${noPages}`,
      `${readOrNot}`
    );
    library.push(newBook);
    
    bookContainer.innerHTML = "";
    displayBooks();
    clearForm();
    //create functionality where when user submits the form, it closes
    closeForm();
    
  });
};
clearForm = () => {
  form.elements[0].value = "";
  form.elements[1].value = "";
  form.elements[2].value = "";
  form.elements[3].checked = false;
  form.elements[4].checked = false;
};

closeForm = () => {
  form.classList.toggle("form");
  form.classList.toggle("hidden");
  bookContainer.innerHTML = "";
  displayBooks();
  clearForm();
  storeLibraryLocal();
  library = [...lsLibrary]
  bookContainer.style.opacity = 1;
};

//store library in local storage
storeLibraryLocal = () => {
  
  localStorage.setItem("library", JSON.stringify(library));
}

getLocalStorage = () => {
  let lsLibrary = localStorage.getItem("library");
  return lsLibrary
}







closeAddBookBtn.innerText = "X";
closeAddBookBtn.classList.add("close");
form.appendChild(closeAddBookBtn);

addBookToLibrary();
displayBooks();
showForm();
getUserInputtedData();
