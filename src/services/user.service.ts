import { AuditLog } from "../models/mongo/auditlog.model";
import { hashPassword } from "../utils/bcrypt";
import { IUserService } from "../interfaces/services/IUserService";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";

export class UserService implements IUserService {

  constructor(
    private userRepository: IUserRepository
  ) {}

  async createUser(data: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }) {

    const existingUser =
      await this.userRepository.findByEmail(
        data.email
      );

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword =
      await hashPassword(data.password);

    const user =
      await this.userRepository.create({
        ...data,
        password: hashedPassword,
      });

    await AuditLog.create({
      action: "USER_CREATED",
      userId: user.id,
      performedBy: "ADMIN",
    });

    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number) {

    const user =
      await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async updateUser(
    id: number,
    data: any
  ) {

    if (data.password) {
      data.password =
        await hashPassword(data.password);
    }

    const updatedUser =
      await this.userRepository.update(
        id,
        data
      );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    await AuditLog.create({
      action: "USER_UPDATED",
      userId: id,
      performedBy: "ADMIN",
    });

    return updatedUser;
  }

  async deleteUser(id: number) {

    const user =
      await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(id);

    await AuditLog.create({
      action: "USER_DELETED",
      userId: id,
      performedBy: "ADMIN",
    });

    return {
      message: "User deleted successfully",
    };
  }
}