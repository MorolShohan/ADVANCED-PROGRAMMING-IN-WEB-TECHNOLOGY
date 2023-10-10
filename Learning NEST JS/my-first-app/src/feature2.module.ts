import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports : []
})
export class Feature2 {
  constructor()
  {
    console.log('Feature2');
  }
}
