

export class Admin {
    static update(id: number, adminData: Partial<Admin>): import("./admin.dto").AdminDto {
      throw new Error('Method not implemented.');
    }
    static findOne(id: number): import("./admin.dto").AdminDto {
      throw new Error('Method not implemented.');
    }
    static findAll(): import("./admin.dto").AdminDto[] {
      throw new Error('Method not implemented.');
    }
    id: number;
    username: string;
    email: string;
    password: string;
  }
  