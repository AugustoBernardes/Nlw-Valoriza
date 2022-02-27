import { UsersRepositories } from "../repositories/UsersRepositories"
import  NewUserValidation from "./validation/NewUserValidation"
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

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }else{
            const user = usersRepositories.create({
                name
                ,email
                ,admin
            })

            const savedUser = await usersRepositories.save(user)

            return savedUser
        }
    }
}

module.exports = { CreateUserService  }