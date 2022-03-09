import { CreateUserController } from '../controllers/CreateUserController';
import { ListUserController } from "../controllers/ListUsersController"
import { AuthenticateUserController } from "../controllers/AuthenticateUserController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

import { Router } from "express"

const userRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();


userRouter.post("/session",authenticateUserController.handle)
userRouter.post("/newuser",createUserController.handle)

userRouter.get("/allusers", ensureAuthenticated, listUserController.handle)

export { userRouter }