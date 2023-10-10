import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports : []
})
export class Feature3 {
  constructor()
  {
    console.log('Feature3');
  }
}
