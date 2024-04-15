import { Request,Response } from "express";
import { EditarClienteServer } from "../../Services/Cliente/EditarClienteServer";




class EditarClienteControler{
   async handle(req:Request, res:Response){
          const {id} = req.body
       
    const editarClienteControler = new EditarClienteServer ()
    const EditarCliente = await editarClienteControler.execute({id})
     return res.json(EditarCliente)
   }

}
export {EditarClienteControler}