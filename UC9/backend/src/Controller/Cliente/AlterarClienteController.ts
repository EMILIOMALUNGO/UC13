import { Request,Response } from "express";
import { AlterarClienteServer } from "../../Services/Cliente/AlterarClienteServer";



class AlterarClienteController{
   async handle(req:Request, res:Response){

    const {id,nome, email,cpf_cnpj,rg_Ie,celular,rua,complemento,bairro,cidade,estado} = req.body

    const alterarClienteController = new AlterarClienteServer()
     const alterarCliente = await  alterarClienteController.execute({
        id,nome, email ,cpf_cnpj,rg_Ie,celular,rua,complemento,bairro,cidade,estado
     } ) 
     
      return res.json(alterarCliente)
   }
}
 export {AlterarClienteController}