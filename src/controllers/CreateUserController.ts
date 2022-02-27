import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService"
import  NewUserValidation from "../services/validation/NewUserValidation"

class CreateUserController{
    async handle(req:Request, res:Response){

        try {
            let data = req.body
            const { error } = NewUserValidation(data)

            const createUserService = new CreateUserService();

            const user = await createUserService.execute({name:data.name,email:data.email,admin:data.admin})

            res.status(200),
            res.json(user)
        } catch (error) {
            res.status(400),
            res.json({
                status:400,
                message:error.message
            })
        }
       
        
    }
}

export { CreateUserController }