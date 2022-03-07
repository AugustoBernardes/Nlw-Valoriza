import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ICreateTag{
    name:string
}

class CreateTagService{
    async execute({ name }: ICreateTag){
        const tags_repositories = getCustomRepository(TagsRepositories)

        const tagAlreadyExists = await tags_repositories.findOne({ name })

        if(tagAlreadyExists){
            throw new Error("Tag already exists!")
        }else{
            const tag = tags_repositories.create({
                name
            })

            const savedTag = await tags_repositories.save(tag)

            return savedTag
        }

    }
}

export { CreateTagService }