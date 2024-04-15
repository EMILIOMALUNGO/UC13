import { Request,Response } from "express";
import { ListarClienteServices } from "../../Services/Cliente/ListarClienteServices";


class ListarClienteContreller{
    async handle(req:Request,  res:Response){
       
       const listarClienteContreller = new ListarClienteServices()
       const listarCliente = await  listarClienteContreller.execute()
       return res.json(listarCliente)
    }
    
}
export{ListarClienteContreller}