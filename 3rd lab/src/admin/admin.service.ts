import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AdminService {
  private adminItems: any[] = [
    { id: 1, name: 'SHOHAN' },
    { id: 2, name: 'ABRAR' },
  ];

  findAll(): any[] {
    return this.adminItems;
  }
  findById(id: number): any {
    const adminItem = this.adminItems.find(item => item.id === id);
    if (!adminItem) {
      throw new NotFoundException(`Admin item with ID ${id} not found`);
    }
    return adminItem;
  }
  create(adminItem: any): any {
    const newAdminItem = { id: this.adminItems.length + 1, ...adminItem };
    this.adminItems.push(newAdminItem);
    return newAdminItem;
  }
 
}
