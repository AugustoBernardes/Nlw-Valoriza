import { CreateUserController } from '../controllers/CreateUserController';
import { Router } from "express"

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post("/newuser",createUserController.handle)

export { userRouter }