import { Request, Response } from "express";


class HomeController {
    async show(request: Request, response: Response){
        return response.json(
            {
                "message": "Welcome to the Valorize API"
            }
        )
    }
}

export {HomeController}