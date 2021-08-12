import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositiry"
import { hash } from 'bcryptjs'


interface IUserRequest {
    name: string
    email: string
    admin?: boolean
    password: string
}

class CreateUserService {
    async execute({name, email, admin, password}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository)
        const userAlreadyExists = await usersRepository.findOne({email})

        if(email.trim() == '' || password.trim() == ''){
            throw new Error('Invalid e-mail or password!')
        }

        if(userAlreadyExists){
            throw new Error('This e-mail is already registered!')
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user)

        return user
    }
}

export {CreateUserService}