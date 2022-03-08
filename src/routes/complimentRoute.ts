import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { Router } from "express"

const complimentsRouter = Router();

const createComplimentController = new CreateComplimentController();

complimentsRouter.post("/newcompliment",ensureAuthenticated,createComplimentController.handle)

export { complimentsRouter }