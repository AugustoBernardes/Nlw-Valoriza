import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService"
import { NewTagValidation } from "../services/validation/TagValidation";


class NewTagController{
    async handle(req: Request, res: Response){
        const data = NewTagValidation(req.body)

        if(data.error){
            res.status(400),
            res.json({
                status:400,
                message:data.error.message
            })
        }
    }
}