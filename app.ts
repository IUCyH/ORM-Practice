import "reflect-metadata";
import express from "express";
import userRouter from "./features/userRouter";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

const PORT = 8080;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});