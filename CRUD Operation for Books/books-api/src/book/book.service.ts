import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookService{
  public books: any[] = [
    { id: 1, title: 'Comedy' },
    { id: 2, title: 'Action' },
    // Add more books as needed
  ];

  //add book
  addBookService(book :Book) : string
  {
    // id auto generate
    book.id = uuidv4();
    this.books.push(book);
    return "Book has been added successfully";
  }

  //update book
  updateBookService(book : Book) : string
  {
    let index = this.books.findIndex((currentBook)=>{
      return currentBook.id == book.id;
     
    })
    
    this.books[index] = book;
    return `Book has been successfully updated`
    
  }

  //delete books
  deleteBooks(bookId : string) : string
  {
    this.books = this.books.filter((book)=>{
      return book.id != bookId;
    })
    return "Book has been deleted"
  }

  //findallbooks
  findAllBooks() : Book[]
  {
    return this.books;
  }

  findById(id: number) {
    return this.books.find(book => book.id === id);
  }
}