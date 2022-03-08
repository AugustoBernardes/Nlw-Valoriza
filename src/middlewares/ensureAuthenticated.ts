import { Request,Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { verify } from "jsonwebtoken";
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

interface Ipayload{
    sub:string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const users_repositories = getCustomRepository(UsersRepositories);

    // Receive token 
    const authToken = req.headers.authorization
    
    if(!authToken){
        return(
            res.status(401).json({
                message:"Unauthorized token!"
            })
            
        )
    }

    // Split the baerer token to get only the value
    const [,token] = authToken.split(" ")

   
    try {
        const { sub } = verify(token,JWT_SECRET ) as Ipayload

        // Validating if the user is on DataBase
        const user = await users_repositories.findOne({id:sub});

        if(!user){
            return res.status(401).json({
                message:"Unauthorized token!"
            })
        }
        
        req.user_id = sub
        return next();
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized token!"
        })
    }

}