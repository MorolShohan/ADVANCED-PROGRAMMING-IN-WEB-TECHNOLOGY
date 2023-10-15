import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookPipe } from './pipes/book.pipes';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('add')
  create(@Body(new BookPipe) createBookDto: CreateBookDto) : string {
    return "add book"
  }

  @Get('getall')
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id : number) : string {
    console.log(id, typeof(id));
    return "book By ID";
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
