
import { IsString, IsInt, IsIn } from 'class-validator';

export class UserDTO {
  @IsString()
  fullName: string;

  @IsInt()
  
  age: number;

  @IsString()
  @IsIn(['active', 'inactive'])
  status: string;
}

// function Min(arg0: number): (target: UserDTO, propertyKey: "age") => void {
//     throw new Error('Function not implemented.');
// }

