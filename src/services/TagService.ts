import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class TagService {

    async create(name: string) {
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

    async list(){
        const tagsRepository = getCustomRepository(TagsRepository)
        const list = tagsRepository.find()

        return classToPlain(list)
    }
}

export {TagService}