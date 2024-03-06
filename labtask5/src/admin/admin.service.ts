import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/admin.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userData: User): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } }); // Explicitly define the type
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, userData: User): Promise<User> {
    await this.findOne(id); // Ensure the user exists
    await this.userRepository.update(id, userData);
    return this.findOne(id); // Return the updated user
  }

  async partialUpdate(id: number, partialUserData: Partial<User>): Promise<User> {
    await this.findOne(id); // Ensure the user exists
    await this.userRepository.update(id, partialUserData);
    return this.findOne(id); // Return the updated user
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id); // Ensure the user exists
    await this.userRepository.remove(user);
  }

  async search(username: string): Promise<User[]> {
    return this.userRepository.find({ where: { username } });
  }
}
