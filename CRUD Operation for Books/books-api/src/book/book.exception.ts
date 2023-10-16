import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException
{
  constructor() {
    super('This is my custom book exception', HttpStatus.BAD_REQUEST);
}
}