import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autToken = req.headers.authorization
    //console.log(autToken)
    
    const [, token] = autToken.split(' ')
    
    if (!token || token === '' || token === 'null') {
        return res.json({dados: 'Token Invalido'})
    }
    
    
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
            ) as Payload
            req.user_id = sub
            return next()
        } catch (err) {
            return res.json({dados: 'Token Expirado'})
            //return res.status(401).end()
    }
}