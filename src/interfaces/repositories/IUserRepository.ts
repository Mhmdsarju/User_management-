import { User } from "../../models/sql/user.entity";

export interface IUserRepository {
  create(
    userData: Partial<User>
  ): Promise<User>;

  findByEmail(
    email: string
  ): Promise<User | null>;

  findById(
    id: number
  ): Promise<User | null>;

  findAll(): Promise<User[]>;

  update(
    id: number,
    userData: Partial<User>
  ): Promise<User | null>;

  delete(
    id: number
  ): Promise<void>;
}