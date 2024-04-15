import { Request, Response } from 'express'
import { CriarMotoqueirosServices } from '../../Services/Motoqueiros/CriarMotoqueirosServices'

class CriarMotoqueirosController{
    async handle(req: Request, res: Response){
        const { nome, nusuarios, password } = req.body
        const criarMotoqueirosServices = new CriarMotoqueirosServices()
        const resposta = await criarMotoqueirosServices.execute({
            nome,
            nusuarios,
            password
        })
        return res.json(resposta)
    }
}

export { CriarMotoqueirosController }