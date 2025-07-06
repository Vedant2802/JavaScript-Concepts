import { Admin } from "./models/Admin";
import { Book } from "./models/Books";
import { Member } from "./models/Member";
import { LibrarySystem } from "./services/LibraryService";

const userSwitcher = document.getElementById("userSwitcher");
const bookSection = document.getElementById("bookSection");
const borrowedSection = document.getElementById("borrowedSection");
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// const availableBooks = [];

const library = new LibrarySystem();

let currentUser = new Admin("Alice", "alice@gmail.com");
userSwitcher.addEventListener("change", function (e) {
  const selected = e.target.value;
  currentUser =
    selected === "admin"
      ? new Admin("Alice", "alice@gmail.com")
      : new Member("John Doe , john@gmail.com");

  bookSection.style.display = selected === "admin" ? "block" : "none";
  borrowedSection.style.display = selected === "member" ? "block" : "none";
  renderBooks();
});

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, genre);
  library.addBook(book);
  renderBooks();
  //   availableBooks.push(addedBook);
  //   console.log(availableBooks);
  //   const listElement = document.createElement("li");
  //   listElement.id = addedBook.id;
  //   listElement.innerText = title;
  //   bookList.appendChild(listElement);
});

// initial render

// bookSection.style.display = "none";
borrowedSection.style.display = "none";

function renderBooks() {
  bookList.innerHTML = "";
  library.getAllBooks().forEach((book) => {
    const li = document.createElement("li");
    li.className =
      "bg-white p-4 rounded shadow flex justify-between items-center";

    let controls = "";
    if (currentUser.getRole() === "Member" && book.isAvailable) {
      controls = `<button class="bg-green-500 text-white px-3 py-1 rounded" data-action="borrow" data-id="${book.id}">Borrow</button>`;
    } else if (currentUser.getRole() === "Admin") {
      controls = `<span class="text-sm text-gray-500">${
        book.isAvailable ? "Available" : "Borrowed"
      }</span>`;
    }

    li.innerHTML = `
          <div>
            <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})</em>
          </div>
          ${controls}
      `;
    bookList.appendChild(li);
  });
}
