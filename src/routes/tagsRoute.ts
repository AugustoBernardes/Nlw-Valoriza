import { CreateTagController } from '../controllers/CreateTagController';
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { Router } from "express"

const tagRouter = Router();

const createTagController = new CreateTagController();

tagRouter.post("/newtag", ensureAuthenticated, ensureAdmin ,createTagController.handle)

export { tagRouter }