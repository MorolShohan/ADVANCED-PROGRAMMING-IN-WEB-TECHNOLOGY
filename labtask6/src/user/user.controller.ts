// src/user/user.controller.ts

import { Controller, Post, Body, UsePipes, ValidationPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { ImageSizePipe } from './pipes/image-size.pipe';
import { diskStorage } from 'multer';

@Controller('admin/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // ValidationPipe for DTO validation
  async createUser(@Body() userData: UserDTO): Promise<UserDTO> {
    // Your user creation logic here
    return ;
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('image', { storage: diskStorage({ destination: './uploads' }) }))
  async uploadImage(@UploadedFile(new ImageSizePipe()) file: any) {
    // Your image upload logic here
  }
}
