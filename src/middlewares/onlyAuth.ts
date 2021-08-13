import { NextFunction, Request, Response } from "express"
import { JwtPayload, verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
  }

export function onlyAuth(request: Request, response: Response, next: NextFunction) {
    const auth = request.headers.authorization.replace('Bearer ', '')
    let token: IPayload

    if(!auth){
        return response.status(401).json({error: 'Access authorized only for authenticated users!'})
    }

    try {
        token = verify(auth, process.env.HASH_MD5) as IPayload
        request.user_id = token.sub
    } catch (error) {
        return response.status(401).json({error: 'Access authorized only for authenticated users!'})
    }

    return next()
}