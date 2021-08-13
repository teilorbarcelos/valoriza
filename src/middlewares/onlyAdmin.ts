import { NextFunction, Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositiry"

export async function onlyAdmin(request: Request, response: Response, next: NextFunction) {
    const {user_id} = request
    const usersRepository = getCustomRepository(UsersRepository)
    const user = await usersRepository.findOne(user_id)

    if(!user.admin){
        return response.status(401).json({error: 'Access authorized only for admins!'})
    }

    return next()

}