import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { Router } from "express"

const tagRouter = Router();

const createTagController = new CreateTagController();

tagRouter.post("/newtag", ensureAdmin ,createTagController.handle)

export { tagRouter }