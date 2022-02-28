import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ICreateTag{
    name:string
}

class CreateTagService{
    async execute({ name }: ICreateTag){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tagAlreadyExists = await tagsRepositories.findOne({ name })

        if(tagAlreadyExists){
            throw new Error("Tag already exists!")
        }else{
            const tag = tagsRepositories.create({
                name
            })

            const savedTag = await tagsRepositories.save(tag)

            return savedTag
        }

    }
}

export { CreateTagService }