
import { Request,Response } from "express";
import { CriarClienteServer } from "../../Services/Cliente/CriarClienteServer";




class CriarClienteControler{
    async handle(req:Request, res:Response){
        const {nome, email,cpf_cnpj,rg_ie,celular,rua,complemento,bairro,cidade,estado, password}= req.body

        const criarClienteControler = new CriarClienteServer()
        const CriarCliente = await criarClienteControler.execute({
            nome, email,cpf_cnpj,rg_ie,celular,rua,complemento,bairro,cidade,estado, password
        })
          return res.json(CriarCliente)
    }

}
export {CriarClienteControler}