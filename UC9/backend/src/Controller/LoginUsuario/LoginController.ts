import { Request, Response } from 'express'
import { LoginServices } from '../../Services/LoginUsuario/LoginServices'

class LoginController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body

        const loginController = new LoginServices()
        const resposta = await loginController.execute({
            email,
            password
        })
        return res.json(resposta)
    }
}

export { LoginController }