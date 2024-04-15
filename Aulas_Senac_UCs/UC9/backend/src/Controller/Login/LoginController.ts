import { Request, Response } from 'express'
import { LoginServices } from '../../Services/Login/LoginServices'

class LoginController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body

        const loginServices = new LoginServices()
        const resposta = await loginServices.execute({
            email,
            password
        })
        return res.json(resposta)
    }
}

export { LoginController }