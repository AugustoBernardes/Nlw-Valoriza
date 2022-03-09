import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"
import { getCustomRepository } from "typeorm"


// Listing by receiver compliments
interface IUserReceiver{
    user_id: string
}

class ListUserReceiverComplimentsService{

    async execute({ user_id }: IUserReceiver){
        const compliments_repostories = getCustomRepository(ComplimentRepositories);

        const compliments = await compliments_repostories.find({
            where:{
                user_receiver:user_id,
            },
            relations:["userSender","userReceiver","tag"]
           
        })

        return compliments
    }
}


// Listing by sender compliments
interface IUserSender{
    user_id: string
}

class ListUserSenderComplimentsService{

    async execute({ user_id }: IUserSender){
        const compliments_repostories = getCustomRepository(ComplimentRepositories);

        const compliments = await compliments_repostories.find({
            where:{
                user_sender:user_id,
            },
            relations:["userSender","userReceiver","tag"]
        })

        return compliments
    }
}


export { ListUserReceiverComplimentsService,ListUserSenderComplimentsService }