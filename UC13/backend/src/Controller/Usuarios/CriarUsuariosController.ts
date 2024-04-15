import { Request, Response } from 'express'
import { CriarusuariosServices } from '../../Services/Usuarios/CriarUsuariosServices'

class CriarusuariosController{
    async handle(req: Request, res: Response){
        const { nome, email, password,categoriaId } = req.body

        const criarUsuariosServices = new CriarusuariosServices()
        const resposta = await criarUsuariosServices.execute({
            nome,
            email,
            password,
            categoriaId
        })
        return res.json(resposta)
    }
}

export { CriarusuariosController}