import { Request, Response } from 'express'
import { LoginMotoqueirosServices } from '../../Services/Motoqueiros/LoginMotoqueirosServices'

class LoginMotoqueirosController{
    async handle(req: Request, res: Response){
        const { nusuario, password } = req.body

        const loginMotoqueirosServices = new LoginMotoqueirosServices()
        const resposta = await loginMotoqueirosServices.execute({
            nusuario,
            password
        })
        return res.json(resposta)
    }
}

export { LoginMotoqueirosController }