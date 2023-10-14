import { Body, Controller,Get,Put,Delete,Param,Post,Query, ValidationPipe, UsePipes, UseInterceptors, UploadedFile, Res } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookInfo } from "./data/book.dto";
import { BookEntity } from "./book.entity";
import { MulterError, diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("book")
export class BookController{
    constructor (private readonly bookService : BookService)
    {

    }
    @Get('index')
  getIndex() {
    return this.bookService.getAll();
    
  }

@Get('/searchbookby/:id')
searchUserBy(@Param('id') userID:number): Promise<BookEntity> {
return this.bookService.getBookByID(userID);
}


@Get('/searchbookbyquery')
searchBookByQuery(@Query() myquery:object): object {
  return myquery;
}

@Get('/searchuserbyobject')
@UsePipes(new ValidationPipe())
searchUserByObject(@Body() myobject:BookInfo): object {
  return {"name":myobject.name};
}

@Post('upload')
@UseInterceptors(FileInterceptor('myfile',
{ fileFilter: (req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
   cb(null, true);
  else {
   cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
   }
  },
  limits: { fileSize: 30000 },
  storage:diskStorage({
  destination: './upload',
  filename: function (req, file, cb) {
   cb(null,Date.now()+file.originalname)
  },
  })
}
  
))
uploadFile(@UploadedFile() file: Express.Multer.File) {
 console.log(file);
}


@Get('/getimage/:name')
 getImages(@Param('name') name:string, @Res() res) {
 res.sendFile(name,{ root: './upload' })
 }

@Post('addadmin')
@UsePipes(new ValidationPipe())
@UseInterceptors(FileInterceptor('profilepic',
{ fileFilter: (req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
   cb(null, true);
  else {
   cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
   }
  },
  limits: { fileSize: 30000 },
  storage:diskStorage({
  destination: './upload',
  filename: function (req, file, cb) {
   cb(null,Date.now()+file.originalname)
  },
  })
}
))
addBook(@Body() bookInfo:BookInfo, @UploadedFile()  myfile: Express.Multer.File) {
  bookInfo.filename = myfile.filename;
return this.bookService.addBook(bookInfo);
}

@Put('/update/:id')
updateBook(@Param('id') id:number, @Body() bookInfo:BookInfo)
{
  return this.bookService.updateBook(id, bookInfo);
}

    
}