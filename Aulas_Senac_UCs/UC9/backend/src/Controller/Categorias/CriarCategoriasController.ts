import { Request, Response } from 'express'

import { CriarCategoriasServices } from '../../Services/Categorias/CriarCategoriasServices'



class CriarCategoriasController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body
        const criarCategoriasServices = new CriarCategoriasServices()
        const resposta = await criarCategoriasServices.execute({
            nome
        })
        return res.json(resposta)
    }
}

export { CriarCategoriasController }