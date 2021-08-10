import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepositiry"


interface IUserRequest {
    name: string
    email: string
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, admin}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository)
        const userAlreadyExists = await usersRepository.findOne({email})

        if(email.trim() == ''){
            throw new Error('Invalid e-mail!')
        }

        if(userAlreadyExists){
            throw new Error('This e-mail is already registered!')
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user
    }
}

export {CreateUserService}