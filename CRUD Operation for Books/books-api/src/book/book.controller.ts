import { Body, Controller,Get,Put,Delete,Param,Post, ParseIntPipe, NotFoundException } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller('book')
export class BookController{
    constructor (private readonly bookService : BookService)
    {

    }

    @Get("/findall")
    getAllBooks() : Book[]
    {
      return this.bookService.findAllBooks();
    }

    @Get(':id')
    findOne(@Param('id') id: number) : string {
    const book = this.bookService.findById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
    }

    @Put("/update")
    updateBook(@Body() book: Book) : string
    {
      return this.bookService.updateBookService(book);
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string) : string
    {
      return this.bookService.deleteBooks(bookId);
    }

    @Post("/add")
    addBook(@Body() book: Book) : string
    {
      return this.bookService.addBookService(book);
    }
    
}