import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { User } from "../models/sql/user.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",

  host: process.env.POSTGRES_HOST,

  port: Number(process.env.POSTGRES_PORT),

  username: process.env.POSTGRES_USER,

  password: process.env.POSTGRES_PASSWORD,

  database: process.env.POSTGRES_DB,

  synchronize: true,

  logging: false,

  entities: [User],
});

console.log("HOST:", process.env.POSTGRES_HOST);
console.log("PORT:", process.env.POSTGRES_PORT);
console.log("USER:", process.env.POSTGRES_USER);
console.log("PASSWORD:", process.env.POSTGRES_PASSWORD);
console.log("DB:", process.env.POSTGRES_DB);