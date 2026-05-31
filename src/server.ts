import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { AppDataSource } from "./config/postgres.config";
import { connectMongoDB } from "./config/mongo.config";

const PORT =process.env.PORT || 8007;

const startServer = async (): Promise<void> => {
    try {
      await AppDataSource.initialize();

      console.log("PostgreSQL Connected");
      await connectMongoDB();

      app.listen(PORT, () => {
        console.log(
          `Server Running On Port ${PORT}`
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

startServer();