import { CreateUserController } from '../controllers/CreateUserController';
import { AuthenticateUserController } from "../controllers/AuthenticateUserController"
import { Router } from "express"

const userRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

userRouter.post("/session",authenticateUserController.handle)
userRouter.post("/newuser",createUserController.handle)

export { userRouter }