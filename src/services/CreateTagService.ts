import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class CreateTagService {
    async execute(name: string) {
        const tagsRepository = getCustomRepository(TagsRepository)

        if(name.trim() == ''){
            throw new Error('Invalid tag name!')
        }

        const tagAlreadyExists = await tagsRepository.findOne({name})

        if(tagAlreadyExists){
            throw new Error('This tag is already registered!')
        }

        const tag = tagsRepository.create({name})

        await tagsRepository.save(tag)

        return tag
    }
}

export {CreateTagService}