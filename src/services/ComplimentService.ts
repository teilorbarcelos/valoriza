import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { UsersRepository } from "../repositories/UsersRepositiry"

interface IComplimentRequest {
    user_sender: number
    user_receiver: number
    tag_id: number
    message: string
}

class ComplimentService {
    async execute({user_sender, user_receiver, tag_id, message}: IComplimentRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepository)
        const userRepository = getCustomRepository(UsersRepository)
        
        const validUser = await userRepository.findOne(user_receiver)

        if(!validUser){
            throw new Error('Select a valid receiver to our compliment!')
        }

        if(user_sender === user_receiver){
            throw new Error('You cant register a compliment to yourself!')
        }

        const compliment = complimentsRepository.create({user_sender, user_receiver, tag_id, message})

        await complimentsRepository.save(compliment)

        return compliment

    }
}

export {ComplimentService}