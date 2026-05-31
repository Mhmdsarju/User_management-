import { AppDataSource } from "../config/postgres.config";
import { User } from "../models/sql/user.entity";

export class UserRepository {
  private repository =
    AppDataSource.getRepository(User);

  async createUser(
    userData: Partial<User>
  ): Promise<User> {
    const user =
      this.repository.create(userData);

    return await this.repository.save(user);
  }

  async findByEmail(
    email: string
  ): Promise<User | null> {
    return await this.repository.findOne({
      where: { email },
    });
  }

  async findById(
    id: number
  ): Promise<User | null> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async findAllUsers(): Promise<User[]> {
    return await this.repository.find();
  }

  async updateUser(
    id: number,
    userData: Partial<User>
  ): Promise<User | null> {
    await this.repository.update(
      id,
      userData
    );

    return await this.findById(id);
  }

  async deleteUser(
    id: number
  ): Promise<void> {
    await this.repository.delete(id);
  }
}