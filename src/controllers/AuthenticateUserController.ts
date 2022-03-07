import { Request, Response } from "express";
import { AuthUserValidation } from "../services/validation/AuthUserValidation"
import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController{
    async handle(req: Request, res: Response){
        const data = AuthUserValidation(req.body);

        
        if(data.error){
            res.status(400),
            res.json({
                status:400,
                message:data.error.message
            })
        }else{
             
            let { email,password } = data.value
            const authenticate_user_service = new AuthenticateUserService();
    
            const token = await authenticate_user_service.execute({ email,password })
    
            res.status(200),
            res.json(token)
        }     
    }
}

export { AuthenticateUserController }