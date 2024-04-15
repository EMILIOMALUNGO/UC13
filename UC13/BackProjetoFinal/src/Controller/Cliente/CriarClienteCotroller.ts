import { Request,Response } from "express";
import { CriarClienteServices } from "../../Services/Cliente/CriarClienteServices";


class CriarClienteCotroller{
   async handle(req:Request, res:Response) {

   const {nome, email , cpf, celular, fixo, rua, complemento ,cep,bairro,cidade, estado,password} = req.body

   const criarClienteCotroller = new CriarClienteServices()
   const criarCliente = await criarClienteCotroller.execute({
    nome, email , cpf, celular, fixo, rua, complemento ,cep,bairro,cidade, estado,password
   })
      return res.json(criarCliente)
   }
}
export{CriarClienteCotroller}