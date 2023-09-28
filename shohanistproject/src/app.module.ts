import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager.controller';

@Module({
  imports: [],
  controllers: [AppController, ManagerController],
  providers: [AppService],
})
export class AppModule {}
