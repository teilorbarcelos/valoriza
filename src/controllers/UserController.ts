import { Request, Response } from "express"
import { AuthService } from "../services/AuthService"
import { UserService } from "../services/UserService"


class UserController {

    async create(request: Request, response: Response){
        const {name, email, admin, password} = request.body

        const userService = new UserService()

        const user = await userService.create({name, email, admin, password})

        return response.json(user)
    }

    async login(request: Request, response: Response){
        const {email, password} = request.body

        const authService = new AuthService()

        const token = await authService.login({email, password})

        return response.json(token)
    }

    async list(request: Request, response: Response) {
        const userService = new UserService()
        const users = await userService.list()

        return response.json(users)
    }

}

export {UserController}