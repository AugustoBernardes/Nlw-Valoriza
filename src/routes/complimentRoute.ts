import { ListUserReceiverComplimentsController,ListUserSenderComplimentsController } from "../controllers/ListComplimentsController"
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { Router } from "express"

const complimentsRouter = Router();

const createComplimentController = new CreateComplimentController();

const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();

complimentsRouter.post("/newcompliment",ensureAuthenticated,createComplimentController.handle)

complimentsRouter.get("/sent",ensureAuthenticated, listUserSenderComplimentsController.handle )
complimentsRouter.get("/received",ensureAuthenticated, listUserReceiverComplimentsController.handle )

export { complimentsRouter }