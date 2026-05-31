import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("REGISTER HIT");
    console.log(req.body);
    const result = await authService.register(
      req.body
    );

    res.status(201).json(result);
  } catch (error) {
    console.log("REGISTER ERROR:", error);
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(
      email,
      password
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};