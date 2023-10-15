import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { promises } from "dns";
import { CreateBookDto } from "../dto/create-book.dto";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform{
  async transform(value: any, metadata: ArgumentMetadata) : Promise<any>{
   const bookClass = plainToClass(CreateBookDto,value)
   const errors = await validate(bookClass)

   if (errors.length > 0)
   {
    throw new BadRequestException("validation failed" + JSON.stringify(errors));
   }
    console.log(value, typeof(value));
    return value;
  }
}