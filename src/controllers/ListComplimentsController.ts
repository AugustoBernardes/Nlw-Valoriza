import { ListUserReceiverComplimentsService,ListUserSenderComplimentsService } from "../services/ListComplimentsService"
import { Request, Response} from "express"

class ListUserReceiverComplimentsController{

    async handle(req: Request, res: Response){
        const { user_id } = req

        const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();
       
        const compliments = await listUserReceiverComplimentsService.execute({ user_id })

        return (res.status(200),res.json(compliments))
    }
} 

class ListUserSenderComplimentsController{

    async handle(req: Request, res: Response){
        const { user_id } = req

        const listUserSenderComplimentsService = new ListUserSenderComplimentsService();

        const compliments = await listUserSenderComplimentsService.execute({ user_id })

        return (res.status(200),res.json(compliments))
    }
} 

export { ListUserReceiverComplimentsController,ListUserSenderComplimentsController }