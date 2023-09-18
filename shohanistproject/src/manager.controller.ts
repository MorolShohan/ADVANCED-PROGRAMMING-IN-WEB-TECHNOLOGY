import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('manager')
export class ManagerController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get('index')
  getIndex(): string {
    console.log("myconsole");
    return "hello manager";
    
  }
}
