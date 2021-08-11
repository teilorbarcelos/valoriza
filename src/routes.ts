import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { TagController } from "./controllers/TagController";
import { onlyAdmin } from "./middlewares/onlyAdmin";


const router = Router()
const userController = new UserController()
const tagController = new TagController()

router.post('/user/create', userController.create)
router.post('/tag/create', onlyAdmin, tagController.create)

export {router}