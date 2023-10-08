import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body, NotFoundException } from '@nestjs/common';
import { AdminService } from './admin.service';
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @Get()
  findAll() {
    const adminItems = this.adminService.findAll();
    return { message: 'Get all admins', data: adminItems };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const adminId = parseInt(id, 10);
    try {
      const adminItem = this.adminService.findById(adminId);
      return { message: `Get admin with ID: ${adminId}`, data: adminItem };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
  @Post()
  create(@Body() createAdminDto: any) {
    const newAdminItem = this.adminService.create(createAdminDto);
    return { message: 'Create admin', data: newAdminItem };
  }
}
