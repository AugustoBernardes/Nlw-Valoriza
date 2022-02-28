import { CreateTagController } from '../controllers/CreateTagController';
import { Router } from "express"

const tagRouter = Router();

const createTagController = new CreateTagController();

tagRouter.post("/newtag",createTagController.handle)

export { tagRouter }