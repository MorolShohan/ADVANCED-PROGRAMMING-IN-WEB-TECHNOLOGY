import { IsInt, IsString } from "class-validator";


export class CreateBookDto {
  @IsInt()
  id : number;
  
  @IsString()
  name : string;

  @IsString()
  author : string;
}
