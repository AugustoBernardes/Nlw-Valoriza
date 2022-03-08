import { UsersRepositories } from "../repositories/UsersRepositories"
import { Request,Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm"

export async function ensureAdmin(req:Request, res:Response, next:NextFunction){
   
    const { user_id } = req

    const users_repositories = getCustomRepository(UsersRepositories);

    const { admin } = await users_repositories.findOne(user_id)

    if(admin == true){
        return next();
    }
    
    return (
        res.status(401),
        res.json({
            error:"Unauthorized!"
        })
    )
}