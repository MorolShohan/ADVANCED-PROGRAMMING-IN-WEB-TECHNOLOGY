import { IsInt, IsNotEmpty, IsString, Matches } from "class-validator";
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';


export class CreateBookDto {
  @IsInt()
  id : number;
  
  @IsString()
  name : string;

  @Matches(/^[A-Za-z]+$/)
  author : string;

  // @IsNotEmpty()
  @Type(() => String)
  file: Express.Multer.File;
}
