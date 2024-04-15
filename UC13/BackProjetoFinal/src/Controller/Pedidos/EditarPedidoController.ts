import { Request,Response } from "express";
import { EditarPedidoServices } from "../../Services/Pedidos/EditarPedidoServices";



class EditarPedidoController{
   async handle(req:Request, res:Response){
       const {id} = req.params
          const editarPedidoServices = new EditarPedidoServices()
          const editarPedido = await editarPedidoServices.execute({
            id
          })
          return res.json(editarPedido)
   }

}

  export {EditarPedidoController}