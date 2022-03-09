import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"


// Listing by receiver compliments
interface IUserReceiver{
    user_id: string
}

class ListUserReceiverComplimentsService{

    async execute({ user_id }: IUserReceiver){
        const compliments_repostories = getCustomRepository(ComplimentRepositories);

        const compliments = await compliments_repostories.find({
            user_receiver:user_id,
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
            user_sender:user_id,
        })

        return compliments
    }
}


export { ListUserReceiverComplimentsService,ListUserSenderComplimentsService }