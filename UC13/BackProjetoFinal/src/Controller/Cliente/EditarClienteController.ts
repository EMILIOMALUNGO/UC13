import { Request,Response } from "express";
import { EditarClienteServices } from "../../Services/Cliente/EditarClienteServices";


class EditarClienteController{
 async handle (req:Request, res:Response){

    const {id}= req.params

    const editarClienteController = new EditarClienteServices()
    const editarCliente = await editarClienteController.execute({
        id
    })
        return res.json(editarCliente) 
 }

}
export{EditarClienteController}