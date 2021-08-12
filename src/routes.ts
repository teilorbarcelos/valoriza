import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { TagController } from "./controllers/TagController"
import { onlyAdmin } from "./middlewares/onlyAdmin"
import { ComplimentController } from "./controllers/ComplimentController"


const router = Router()
const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()

router.post('/user/create', userController.create)
router.post('/user/auth/login', userController.login)
router.post('/tag/create', onlyAdmin, tagController.create)
router.post('/compliment/create', onlyAdmin, complimentController.create)

export {router}