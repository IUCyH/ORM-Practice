import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./ormconfig";
import userRouter from "./features/userRouter";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

const PORT = 8080;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, async () => {
  console.log(`Server running at ${HOST}:${PORT}`);

  try {
    await AppDataSource.initialize();
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
});