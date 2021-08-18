import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositiry"

interface IAuthRequest {
    email: string
    password: string
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
            uid: user.id,
            name: user.name,
            email: user.email,
            token
        }
    }
}

export {AuthService}