// src/user/dto/user.dto.ts

import { IsString, IsEmail, IsNumberString } from 'class-validator';

export class UserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

//   @IsNotEmpty()
//   @Matches(/^(?=.*\d)/, { message: 'Password must contain at least one numeric character' })
  password: string;

  
  nid: string;

//   @IsOptional()
  @IsNumberString()
  phoneNumber: string;
}

// function IsNotEmpty(): (target: UserDTO, propertyKey: "password") => void {
//     throw new Error('Function not implemented.');
// }

// function Matches(arg0: RegExp, arg1: { message: string; }): (target: UserDTO, propertyKey: "password") => void {
//     throw new Error('Function not implemented.');
// }

// function IsOptional(): (target: UserDTO, propertyKey: "phoneNumber") => void {
//     throw new Error('Function not implemented.');
// }

