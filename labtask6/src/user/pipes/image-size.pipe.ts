// src/user/pipes/image-size.pipe.ts

import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class ImageSizePipe implements PipeTransform {
  async transform(value: any): Promise<any> {
    if (!value) {
      return value;
    }

    const fileExt = extname(value.originalname).toLowerCase();
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if (!allowedExtensions.includes(fileExt)) {
      throw new BadRequestException('Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.');
    }

    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (value.size > maxSize) {
      throw new BadRequestException('File size exceeds the limit of 2 MB.');
    }

    return value;
  }
}
