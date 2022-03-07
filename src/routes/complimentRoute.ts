import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { Router } from "express"

const complimentsRouter = Router();

const createComplimentController = new CreateComplimentController();

complimentsRouter.post("/newcompliment" ,createComplimentController.handle)

export { complimentsRouter }