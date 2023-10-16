import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe,UseInterceptors, UploadedFile } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookPipe } from './pipes/book.pipes';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from "multer";


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
  @Post('upload')
   @UseInterceptors(FileInterceptor('file', { fileFilter: (req, file, cb) => { if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))  cb(null, true); 
   else {  cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false); } },
    limits: { fileSize: 300 }, storage:diskStorage({ destination: './uploads', filename: function (req, file, cb)
     {  cb(null,Date.now()+file.originalname) }, }) }))
      uploadFile(@UploadedFile() file: Express.Multer.File) { console.log(file); }
 
}
