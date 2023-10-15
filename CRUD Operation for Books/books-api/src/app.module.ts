import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BookModule, UserModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
