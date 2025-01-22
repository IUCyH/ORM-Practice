import { Router } from 'express';
import UserController from "./userController";

const router = Router();
const controller = new UserController();

router.get("/:id", controller.getUser);

export default router;