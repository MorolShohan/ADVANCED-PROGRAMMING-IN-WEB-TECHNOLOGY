import { Controller, Get,Param,Query } from '@nestjs/common';
import { AppService } from './app.service';
import {AdminInfo} from './admin.dto';

@Controller('admin')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/searchuserbyid/:id')
searchUserBy(@Param('id')userID:number):string {
  return "the user id is " + userID;
}

@Get('/searchuserbyname/:name')
searchUserByname(@Param('name')userName:string):string{
  return "the user name is " + userName;
}

@Get('/searchuserbyquery')
searchUserByQuery(@Query()myquery:object):object{
  return myquery;
}

@Get('/searchuserbyobject')
searchUserByObject(@Query()myobject:AdminInfo):object{
  return {"name" :myobject.name};
}

}

