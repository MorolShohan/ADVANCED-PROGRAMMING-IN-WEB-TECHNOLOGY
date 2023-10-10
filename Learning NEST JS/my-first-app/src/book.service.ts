import { Injectable } from "@nestjs/common";


@Injectable()
export class BookService{
  addBook():string
  {
    return "this will add book";
  }

  updateBook(): string{
    return "this will update books"
  }

  deleteBooks():string{
    return "this will delete books"
  }

  findBooks():string{
    return "this will find all books"
  }
}