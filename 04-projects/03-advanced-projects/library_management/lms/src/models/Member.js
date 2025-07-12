import { User } from "./User";

export class Member extends User {
  constructor(name, email) {
    super(name, email);
  }

  borrowBook(book) {}

  returnBook(book) {}

  getRole() {
    return "Member";
  }
}
