import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { TagController } from "./controllers/TagController"
import { onlyAdmin } from "./middlewares/onlyAdmin"
import { ComplimentController } from "./controllers/ComplimentController"
import { onlyAuth } from "./middlewares/onlyAuth"
import { HomeController } from "./controllers/HomeController"

const router = Router()
const homeController = new HomeController()
const userController = new UserController()
const tagController = new TagController()
const complimentController = new ComplimentController()

router.get('/', homeController.show)

router.post('/user/create', userController.create)
router.get('/users/list', onlyAuth, userController.list)
router.get('/user/get', onlyAuth, userController.get)
router.post('/user/auth/login', userController.login)

router.post('/tag/create', onlyAuth, onlyAdmin, tagController.create)
router.get('/tags/list', onlyAuth, tagController.list)

router.get('/compliments/list', onlyAuth, complimentController.list)
router.post('/compliment/create', onlyAuth, complimentController.create)

export {router}