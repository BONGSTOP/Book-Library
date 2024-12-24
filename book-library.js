const myLibrary = [];

function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const genre = document.querySelector("#genre").value;
  const read = document.querySelector("#read").checked;

  const book = new Book(title, author, genre, read);

  if (!title || !author || !genre) {
    alert("Please fill out all fields");
    return;
  }

  myLibrary.push(book);

  document.querySelector("form").reset();

  render();

  return myLibrary;
}

function render() {
  const libraryContainer = document.querySelector("#book-list");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md");

    const title = document.createElement("p");
    title.classList.add("text-lg", "font-semibold");
    title.textContent = `Title: ${book.title}`;
    bookDiv.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("text-lg", "font-semibold");
    author.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(author);

    const genre = document.createElement("p");
    genre.classList.add("text-lg", "font-semibold");
    genre.textContent = `Genre: ${book.genre}`;
    bookDiv.appendChild(genre);

    const read = document.createElement("p");
    read.classList.add("text-lg", "font-semibold");
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    bookDiv.appendChild(read);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("flex", "justify-between", "mt-4");
    bookDiv.appendChild(buttonsDiv);

    const removeButton = document.createElement("button");
    removeButton.classList.add(
      "bg-red-500",
      "text-white",
      "p-2",
      "rounded",
      "hover:bg-red-600",
      "mr-2"
    );
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
    });
    buttonsDiv.appendChild(removeButton);

    if (book.read == false) {
      const notReadButton = document.createElement("button");
      notReadButton.classList.add(
        "bg-blue-500",
        "text-white",
        "p-2",
        "rounded",
        "hover:bg-green-600",
        "mr-2"
      );
      notReadButton.textContent = "Read";
      notReadButton.addEventListener("click", () => {
        myLibrary[index].read = !myLibrary[index].read;
        render();
      });
      buttonsDiv.appendChild(notReadButton);
    }

    libraryContainer.appendChild(bookDiv);
  });
}

const addBookButton = document
  .querySelector("#add-book")
  .addEventListener("click", addBookToLibrary);
