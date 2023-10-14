import { Injectable } from "@nestjs/common";
import {v4 as uuidv4} from 'uuid';
import { BookEntity} from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';//problem
import { Repository } from 'typeorm';
import { BookInfo} from "./data/book.dto";


@Injectable()
export class BookService{
  constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) {}
  
 
    getAll(): Promise<BookEntity[]> {
      return this.bookRepository.find(
        {
          select:{
            title: true,
            author: true
          
          }
          
        }
      );
    }

    async addBook(bookinfo: BookInfo): Promise<BookEntity[]> {
      const res = await this.bookRepository.save(bookinfo);
      return this.bookRepository.find();
      }

    getBookByID(id:number): Promise<BookEntity> {
      return this.bookRepository.findOneBy({id:id});
      }

      updateBook(id:number,bookinfo:BookInfo):Promise<BookEntity>
      {
       const res=  this.bookRepository.update(id,bookinfo);
    
         return this.bookRepository.findOneBy({id});
      }
      
}