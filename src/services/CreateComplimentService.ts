import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"

interface INewCompliment{
    tag_id:string,
    user_sender:string,
    user_receiver:string,
    message:string,
}

class CreateComplimentService{
    async execute({ tag_id, user_sender, user_receiver, message }:INewCompliment){
        const compliments_repostories = getCustomRepository(ComplimentRepositories)
        const tags_repositories = getCustomRepository(TagsRepositories)
        const users_repositories = getCustomRepository(UsersRepositories);

        // Checking if the sender is him self
        if(user_sender === user_receiver){
            throw new Error("Incorrect User Receiver!");
        }

        // Validating if the sender and receiver users exists
        const receiver_user_exists = await users_repositories.findOne({
            id:user_receiver
        })

        if(!receiver_user_exists){
            throw new Error("User Receiver does not exists!");
        }

        const tag_exists = await tags_repositories.findOne({
            id:tag_id
        })

        if(!tag_exists){
            throw new Error("Tag does not exists!");
        }

        const compliment =  compliments_repostories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        const saved_compliment = await compliments_repostories.save(compliment)

        return saved_compliment
    }
}

export { CreateComplimentService }