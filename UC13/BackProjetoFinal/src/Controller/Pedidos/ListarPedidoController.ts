import { Request,Response } from "express";
import { ListarPedidoServices } from "../../Services/Pedidos/ListarPedidoServices";



class ListarPedidoController{
   async handle(req:Request, res:Response){
    const listarPedidoController = new ListarPedidoServices()
     const listarPedido = await listarPedidoController.execute()
     return res.json(listarPedido)
       
   }
}
export{ListarPedidoController}