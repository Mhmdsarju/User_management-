import { AppDataSource } from "../config/postgres.config";
import { User } from "../models/sql/user.entity";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { BaseRepository } from "./base.repository";

export class UserRepository extends BaseRepository<User> implements IUserRepository{
  private repository =AppDataSource.getRepository(User);

  async create(userData: Partial<User>): Promise<User> {
    const user =this.repository.create(userData);
    return await this.repository.save(user);
  }

  async findByEmail( email: string): Promise<User | null> {
    return await this.repository.findOne({where: { email },
    });
  }

  async findById(id: number): Promise<User | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async update(id: number,userData: Partial<User>): Promise<User | null> {
    await this.repository.update(
      id,
      userData
    );

    return await this.findById(id);
  }

  async delete(    id: number
  ): Promise<void> {
    await this.repository.delete(id);
  }
}