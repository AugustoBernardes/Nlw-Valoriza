import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import bcrypt from "bcrypt"

interface ICreateUser{
    name:string,
    email:string,
    password:string,
    admin?:boolean
}

class CreateUserService{
    async execute({ name,email,password,admin }: ICreateUser){
        const usersRepositories = getCustomRepository(UsersRepositories);


        const userAlreadyExists = await usersRepositories.findOne({
            email
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }else{
            const user = usersRepositories.create({
                name,
                email,
                password,
                admin
                
            })

            const savedUser = await usersRepositories.save(user)

            return savedUser
        }
    }
}

export { CreateUserService  }