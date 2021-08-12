import { Request, Response } from "express";
import { ComplimentService } from "../services/ComplimentService";


class ComplimentController {
    async create(request: Request, response: Response){
        const {user_sender, user_receiver, tag_id, message} = request.body

        const createComplimentService = new ComplimentService()

        const compliment = await createComplimentService.execute({user_sender, user_receiver, tag_id, message})

        return response.json(compliment)
    }
}

export {ComplimentController}