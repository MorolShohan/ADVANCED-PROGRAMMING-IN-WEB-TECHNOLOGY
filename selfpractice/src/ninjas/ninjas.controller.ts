import { Controller,Get,Post,Put,Delete,Param,Query,Body, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
@UseGuards(BeltGuard)
export class NinjasController {
  constructor (private readonly ninjasService : NinjasService)
  {}
// GET / ninjas --> []

@Get()
getNinjas(@Query('weapon') weapon : 'stars' | 'chucks')
{
  // const service = new NinjasService();
  return this.ninjasService.getNinjas(weapon);
}

@Get(':id')
getOneNinja(@Param('id', ParseIntPipe) id : number)
{
  try{
    return this.ninjasService.getNinja(id);

  }catch (err){
    throw new NotFoundException();
  }
  
}

@Post()
createNinja(@Body(new ValidationPipe()) CreateNinjaDto )
{
  return this.ninjasService.createNinja(CreateNinjaDto);
}

@Put(':id')
updateNinja(@Param('id') id : string, @Body()UpdateNinjaDto: UpdateNinjaDto)
{
 return this.ninjasService.updateNinja(+id,UpdateNinjaDto);
}

@Delete(':id')
removeNinja(@Param('id') id : string)
{
  return {
    id
  };
}
}


// function getNinjas() {
//   throw new Error('Function not implemented.');
// }
// GET / ninjas/:id--> {...}
//POST / ninjas
// PUT / ninjas/:id--> {...}
// DELETE / ninjas/:id--> {...}
