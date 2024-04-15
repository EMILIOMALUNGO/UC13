import { Request, Response } from 'express'
import { CriarClientesServices } from '../../Services/Clientes/CriarClientesServices'

class CriarClientesController {
    async handle(req: Request, res: Response) {
        const {
            nome,
            celular,
            cpf,
            email,
            password,
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        } = req.body

        const criarClientesServices = new CriarClientesServices()
        const resposta = await criarClientesServices.execute({
            nome,
            celular,
            cpf,
            email,
            password,
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })

        return res.json(resposta)

    }

    async listarClientes(req: Request, res: Response){
        const listarClientes = new CriarClientesServices()
        const resposta = await listarClientes.listarClientes()
       return res.json(resposta)
    }
}

export { CriarClientesController }