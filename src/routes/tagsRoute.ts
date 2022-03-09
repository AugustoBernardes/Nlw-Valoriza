import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { CreateTagController } from "../controllers/CreateTagController";
import { ListTagsController } from "../controllers/ListTagsController"
import { ensureAdmin } from "../middlewares/ensureAdmin"

import { Router } from "express"

const tagRouter = Router();

const createTagController = new CreateTagController();

const listTagsController = new ListTagsController();

tagRouter.post("/newtag", ensureAuthenticated, ensureAdmin ,createTagController.handle)

tagRouter.get("/alltags", ensureAuthenticated ,listTagsController.handle)
export { tagRouter }