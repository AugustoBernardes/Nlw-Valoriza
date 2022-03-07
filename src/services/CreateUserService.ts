import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"

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

            // Encrypting password
            const password_hash = await hash(password,8)

            const user = usersRepositories.create({
                name,
                email,
                password:password_hash,
                admin
                
            })

            const savedUser = await usersRepositories.save(user)

            // Returning user without password 
            return ({
                name:savedUser.name,
                email:savedUser.email,
                admin:savedUser.admin,
                created_at:savedUser.created_at,
                updated_at:savedUser.updated_at
            })
        }
    }
}

export { CreateUserService  }