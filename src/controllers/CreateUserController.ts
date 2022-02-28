import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService"
import  NewUserValidation from "../services/validation/NewUserValidation"

class CreateUserController{
    async handle(req:Request, res:Response){
        const data = NewUserValidation(req.body)
    
        if(data.error){
            res.status(400),
            res.json({
                status:400,
                message:data.error.message
            })
        }else{
            try {
                
                let { email,name,admin } = data.value
                const createUserService = new CreateUserService();
    
                const user = await createUserService.execute({ name,email,admin })
    
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
}

export { CreateUserController }