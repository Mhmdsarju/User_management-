import { UserRepository } from "../repositories/user.repository";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";
import { AuditLog } from "../models/mongo/auditlog.model";

export class AuthService {
  private userRepository = new UserRepository();

  async register(userData: {name: string;email: string;password: string;}) {
    const existingUser =
      await this.userRepository.findByEmail(
        userData.email
      );

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword =
      await hashPassword(userData.password);

    const user =
      await this.userRepository.createUser({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: "user",
      });

    await AuditLog.create({
      action: "USER_REGISTERED",
      userId: user.id,
      performedBy: user.email,
    });

    return {
      message: "User registered successfully",
      user,
    };
  }

  async login(email: string,password: string) {
    const user =
      await this.userRepository.findByEmail(
        email
      );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch =
      await comparePassword(
        password,
        user.password
      );

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(
      user.id,
      user.role
    );

    await AuditLog.create({
      action: "USER_LOGIN",
      userId: user.id,
      performedBy: user.email,
    });

    return {
      token,
      user,
    };
  }
}