import { Request,Response } from "express";
import { AlterarPedidoServices } from "../../Services/Pedidos/AlterarPedidoServices";



class AlterarPedidoController{
    async handle(req:Request, res:Response){
        const { id,draft,status } = req.body
       console.log('c',id,draft,status )

        const alterarPedidoController = new AlterarPedidoServices()
        const alterarPedidos = await alterarPedidoController.execute({
            id,draft,status
        })
       // console.log('4',alterarPedidos)
         return res.json(alterarPedidos)        
    }
}
export{AlterarPedidoController}