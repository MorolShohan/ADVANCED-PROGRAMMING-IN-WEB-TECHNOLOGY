// src/user/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column({ unsigned: true })
  age: number;

  @Column({ default: 'active', enum: ['active', 'inactive'] })
  status: string;
}
