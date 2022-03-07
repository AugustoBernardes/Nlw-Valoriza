import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

interface IAuthenticateUser{
    email:string,
    password:string
}

class AuthenticateUserService{

    async execute({ email,password }: IAuthenticateUser){
        const users_repositories = getCustomRepository(UsersRepositories);

        // Validate if email exist
        const user_exists = await users_repositories.findOne({
            email
        })

        if(!user_exists){
            throw new Error("Email/Password incorrect!");
        }

        // Validate email and password match
        const password_match = await compare(password, user_exists.password)

        if(!password_match){
            throw new Error("Email/Password incorrect!");
        }

        // Generate token
        const token = sign({
            email:user_exists.email
        },JWT_SECRET,{
            subject:user_exists.id,
            expiresIn:"1d"
        })


        return ({
            token:token,
        })
    }

}

export { AuthenticateUserService }