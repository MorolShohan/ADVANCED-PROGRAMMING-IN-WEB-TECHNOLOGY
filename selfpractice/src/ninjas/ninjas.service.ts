import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  updateNinja(arg0: number, UpdateNinjaDto: UpdateNinjaDto) {
    throw new Error('Method not implemented.');
  }
  private ninjas = [
    {id :0, name: 'ninjaA', weapon: 'stars'},
    {id :1, name: 'ninjaB', weapon: 'chucks'},
  ];

  getNinjas(weapon?: 'stars' | 'chucks')
  {
    if (weapon)
    {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id:number)
  {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if(!ninja)
    {
      throw new Error('ninja not found');
    }

    return ninja;
  }

  createNinja(CreateNinjaDto: CreateNinjaDto)
  {
    const newNinja = {
      CreateNinjaDto,
      id : Date.now(),
    };
    this.ninjas.push();

    return newNinja;
  }

  removeNinja(id:number)
  {
    const toBeRemoved = this.getNinja(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return toBeRemoved;
  }
}
