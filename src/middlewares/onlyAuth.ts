import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
  }

export function onlyAuth(request: Request, response: Response, next: NextFunction) {

    if(!request.headers.authorization){
        return response.status(401).json({error: 'Access authorized only for authenticated users!'})
    }
    
    const auth = request.headers.authorization.replace('Bearer ', '')
    let token: IPayload

    try {
        token = verify(auth, process.env.HASH_MD5) as IPayload
        request.user_id = token.sub
    } catch (error) {
        return response.status(401).json({error: 'Access authorized only for authenticated users!'})
    }

    return next()
}