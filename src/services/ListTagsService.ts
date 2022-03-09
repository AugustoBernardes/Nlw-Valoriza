import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"

class ListTagsService{
    async execute(){
        const tags_repositories = getCustomRepository(TagsRepositories);

        let tags = await tags_repositories.find({});

        return classToPlain(tags);
    }
}

export { ListTagsService }