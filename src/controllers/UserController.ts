import { Request, Response } from "express"
import { AuthService } from "../services/AuthService"
import { CreateUserService } from "../services/CreateUserService"


class UserController {

    async create(request: Request, response: Response){
        const {name, email, admin, password} = request.body

        const createUserService = new CreateUserService()

        const user = await createUserService.execute({name, email, admin, password})

        return response.json(user)
    }

    async login(request: Request, response: Response){
        const {email, password} = request.body

        const authUserService = new AuthService()

        const token = await authUserService.execute({email, password})

        return response.json(token)
    }

}

export {UserController}