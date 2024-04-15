import { Request, Response } from "express";
import { ApagarPedidosServices } from "../../Services/Pedidos/ApagarPedidosServices";



class ApagarPedidosController{
   async handle(req:Request, res:Response){
      const {id} = req.params
       // console.log(id)
      const apagarPedidosController = new  ApagarPedidosServices ()
      const  apagarPedidos = await  apagarPedidosController.execute({
        id
      })
      return res.json(apagarPedidos)
   }

}
export{ApagarPedidosController}