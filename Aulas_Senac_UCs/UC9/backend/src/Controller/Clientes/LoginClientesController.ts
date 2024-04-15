import { Request, Response } from 'express'
import { LoginClientesServices } from '../../Services/Clientes/LoginClientesServices'


class LoginClientesController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body
        const loginClientesServices = new LoginClientesServices()
        const resposta = await loginClientesServices.execute({
            email,
            password
        })
        return res.json(resposta)
    }
}

export { LoginClientesController }