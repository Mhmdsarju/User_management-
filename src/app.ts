import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("apiworking");
})

app.use("/api/auth",authRoutes);

app.use("/api/users",userRoutes);

app.use(errorMiddleware);

export default app;