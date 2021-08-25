import { compare } from "bcryptjs"
import { classToPlain } from "class-transformer"
import { sign, verify } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositiry"

interface IAuthRequest {
    email: string
    password: string
}

interface IPayload {
    email: string
    sub: string
}

class AuthService {
    async login({email, password}: IAuthRequest) {
        const usersRepository = getCustomRepository(UsersRepository)
        const user = await usersRepository.findOne({email})

        if(!user || !await compare(password, user.password)){
            throw new Error('Wrong e-mail or password!')
        }

        const token = sign({email: user.email}, process.env.HASH_MD5, {subject: user.id.toString(), expiresIn: '1d'})

        return {
            token,
            user: {
                uid: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin
            }
        }
    }

    async verify(token: string){
        const result = verify(token, process.env.HASH_MD5) as IPayload
        const usersRepository = getCustomRepository(UsersRepository)
        const email = result.email
        const user = await usersRepository.findOne({email})

        const finalUser = {
            token,
            user: classToPlain(user)
        }

        return finalUser

    }
}

export {AuthService}