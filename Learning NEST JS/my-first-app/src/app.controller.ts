import { Controller, Delete, Get, Post, Put,Param } from "@nestjs/common";
import { get } from "http";
import { BookService } from "./book.service";

@Controller('book')
export class BookController{

// public bookService : BookService = new BookService();
//Nest JS has provided me the object
constructor(private bookService: BookService){}
  //add
@Post('/add')
addBook():string{
 return this.bookService.addBook();
}
//delete
@Delete('/delete')
deleteBook():string{
  return this.bookService.deleteBooks();
}

//update
@Put('/update')
updateBook():string{
  return this.bookService.updateBook();
}
//find all book
@Get('/findAll')
findAllBooks():string{
  return this.bookService.findBooks();
}

// @Get('/findBooksById/:bookId')
// findBookById(@Param() params):string{
  
// }
}

function findBookById(arg0: any, params: any): any {
  throw new Error("Function not implemented.");
}
