import { Module, NestModule,MiddlewareConsumer } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { bookMiddleWare } from "./book.middleware";

@Module({
  imports : [],
  controllers : [BookController],
  providers : [BookService]
})
export class BookModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bookMiddleWare).forRoutes('book');
  }

}