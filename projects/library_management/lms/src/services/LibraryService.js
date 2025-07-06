export class LibrarySystem {
  #books;

  constructor() {
    this.#books = [];
  }

  addBook(book) {
    this.#books.push(book);
  }

  getAvailableBooks() {
    return this.#books.filter((book) => book.isAvailable === true);
  }

  getAllBooks() {
    return this.#books;
  }
}
