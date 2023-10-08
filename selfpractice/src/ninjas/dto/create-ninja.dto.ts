export class CreateNinjaDto {
  name : string;

  weapon

}

import { MinLength } from "class-validator";
export class createNinjaDto
{
@ MinLength(3)
name : string;


}
