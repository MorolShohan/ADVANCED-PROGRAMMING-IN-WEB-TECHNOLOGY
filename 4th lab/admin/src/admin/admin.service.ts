import { AdminDto } from './admin.dto';
import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  private admins: Admin[] = [];

  create(admin: Admin): Admin {
    admin.id = this.admins.length + 1;
    this.admins.push(admin);
    return admin;
  }

  findAll(): Admin[] {
    return this.admins;
  }

  findOne(id: number): Admin {
    return this.admins.find((admin) => admin.id === id);
  }

  update(id: number, adminData: Partial<Admin>): Admin {
    const admin = this.findOne(id);
    if (!admin) {
      return null;
    }
    Object.assign(admin, adminData);
    return admin;
  }

  remove(id: number): void {
    const index = this.admins.findIndex((admin) => admin.id === id);
    if (index !== -1) {
      this.admins.splice(index, 1);
    }
  }
}
