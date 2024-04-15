import { Request,Response } from "express";
import { ListarClienteServerID } from "../../Services/Cliente/ListarClienteServerID";




class ListarClienteControllerID{
    async handle(req:Request, res:Response){

        const {id}=req.params
       

        const  ListarClienteControllerID = new  ListarClienteServerID()
        const listarId = await ListarClienteControllerID.execute({id})
        return res.json(listarId)
      
    }
}
export {ListarClienteControllerID}


