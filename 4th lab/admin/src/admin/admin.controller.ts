

import { Controller, Get, Post, Put, Delete, Param, Body,ValidationPipe, UsePipes } from '@nestjs/common';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminDto } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() admin: AdminDto) {
    return admin;
  }

  @Get()
  findAll(): AdminDto[] {
    return Admin.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): AdminDto {
    return Admin.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() adminData: Partial<Admin>): AdminDto {
    return Admin.update(id, adminData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.adminService.remove(id);
  }
}
