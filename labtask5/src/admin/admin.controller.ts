import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { UserService } from './admin.service';
import { User } from './entities/admin.entity';

@Controller('admin/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userData: User): Promise<User> {
    return this.userService.create(userData);
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() userData: User): Promise<User> {
    return this.userService.update(id, userData);
  }

  @Patch(':id')
  partialUpdateUser(@Param('id') id: number, @Body() partialUserData: Partial<User>): Promise<User> {
    return this.userService.partialUpdate(id, partialUserData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }

  // You can also use @Query decorator for handling query parameters
  @Get('search')
  searchUsers(@Query('username') username: string): Promise<User[]> {
    return this.userService.search(username);
  }
}
