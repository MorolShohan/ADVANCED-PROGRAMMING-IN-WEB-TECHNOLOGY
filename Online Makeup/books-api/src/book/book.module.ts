import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { BookEntity} from "./book.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports : [TypeOrmModule.forFeature([BookEntity]),],
  controllers : [BookController],
  providers : [BookService]
})
export class BookModule{}