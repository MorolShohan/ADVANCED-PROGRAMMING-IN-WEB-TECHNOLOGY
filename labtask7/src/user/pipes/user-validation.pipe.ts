// src/user/pipes/user-validation.pipe.ts

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { UserDTO } from '../dto/create-user.dto';

@Injectable()
export class UserValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<UserDTO> {
    const userDto = plainToClass(UserDTO, value, { excludeExtraneousValues: true });
    const errors = await validate(userDto);

    if (errors.length > 0) {
      const errorMessage = errors.map(error => Object.values(error.constraints).join(', ')).join('; ');
      throw new BadRequestException(errorMessage);
    }

    return userDto;
  }
}
