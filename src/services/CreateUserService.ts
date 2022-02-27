import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"

interface ICreateUser{
    name:string,
    email:string,
    admin?:boolean
}

class CreateUserService{
    async execute({ name,email,admin }: ICreateUser){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await usersRepositories.findOne({
            email
        })
    }
}