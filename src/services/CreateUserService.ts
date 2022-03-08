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
        const users_repositories = getCustomRepository(UsersRepositories);

        // Validate if user already exist
        const user_already_exists = await users_repositories.findOne({
            email
        })

        if(user_already_exists){
            throw new Error("User already exists!")
        }else{

            // Encrypting password
            const password_hash = await hash(password,8)

            const user = users_repositories.create({
                name,
                email,
                password:password_hash,
                admin
                
            })

            const savedUser = await users_repositories.save(user)

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