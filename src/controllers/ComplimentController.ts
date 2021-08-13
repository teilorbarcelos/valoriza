import { Request, Response } from "express";
import { ComplimentService } from "../services/ComplimentService";


class ComplimentController {
    async create(request: Request, response: Response){
        const {user_id} = request
        const {user_receiver, tag_id, message} = request.body

        const complimentService = new ComplimentService()

        const compliment = await complimentService.create({user_sender: parseInt(user_id), user_receiver, tag_id, message})

        return response.json(compliment)
    }

    async list(request: Request, response: Response){
        const {user_id} = request
        
        const listUserComplimentsSerice = new ComplimentService()

        const listUserCompliments = await listUserComplimentsSerice.list(user_id)

        return response.json(listUserCompliments)
    }
}

export {ComplimentController}