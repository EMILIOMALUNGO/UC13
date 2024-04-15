import { Request, Response } from 'express'
import { ListarMotoqueirosTokenServices } from '../../Services/Motoqueiros/ListarMotoqueirosTokenServices'


class ListarMotoqueirosTokenController{
    async handle(req: Request, res: Response){
        const id = req.user_id
        const listarMotoqueirosTokenController = new ListarMotoqueirosTokenServices()
        const resposta = await listarMotoqueirosTokenController.execute({
            id
        })
        return res.json(resposta)
    }
}

export { ListarMotoqueirosTokenController }