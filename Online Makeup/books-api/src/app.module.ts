import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [BookModule, TypeOrmModule.forRoot(
{ type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'root',
database: 'e-commerce',
autoLoadEntities: true,
synchronize: true,
} ),
],
  controllers: [],
  providers: [],
})
export class AppModule {}
