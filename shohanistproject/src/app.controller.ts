import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('admin')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get('index')
  getIndex(): string {
    return "hello index";
    console.log("myconsole");
  }
}
