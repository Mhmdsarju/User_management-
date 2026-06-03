import { User } from "../../models/sql/user.entity";

export interface IUserService {
  createUser(data: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }): Promise<User>;

  getAllUsers(): Promise<User[]>;

  getUserById(id: number): Promise<User>;

  updateUser(id: number,data: Partial<User>): Promise<User>;

  deleteUser(id: number): Promise<{ message: string }>;
}