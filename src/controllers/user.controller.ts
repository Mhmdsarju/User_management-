import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";

const userService =
  new UserService(
    new UserRepository()
  );

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user =
      await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users =
      await userService.getAllUsers();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const user =
      await userService.getUserById(id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const user =
      await userService.updateUser(
        id,
        req.body
      );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const result =
      await userService.deleteUser(id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};