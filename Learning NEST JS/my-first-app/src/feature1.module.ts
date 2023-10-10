import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports : []
})
export class Feature1 {
  constructor()
  {
    console.log('Feature1');
  }
}
