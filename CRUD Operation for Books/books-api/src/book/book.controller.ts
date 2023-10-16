import { Body, Controller,Get,Put,Delete,Param,Post, ParseIntPipe, NotFoundException, BadRequestException, UseFilters } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exception.filter";

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
    @UseFilters(BookCustomExceptionFilter)
    findOne(@Param('id') id: number) : string {
    const book = this.bookService.findById(id);
    if (!book) {
      throw new BadRequestException();
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