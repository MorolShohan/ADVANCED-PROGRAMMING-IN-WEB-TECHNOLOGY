import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user';

@Module({
  controllers: [UserController],
  providers: [UserService, User]
})
export class UserModule {}
