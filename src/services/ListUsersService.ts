import { UsersRepositories } from "../repositories/UsersRepositories"
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"

class ListUserService{
    async execute(){
        const users_repositories = getCustomRepository(UsersRepositories)

        const users = await users_repositories.find({})

        return classToPlain(users)
    }
}

export { ListUserService }