import { Request,Response } from "express";
import { CriarPedidoServer } from "../../Services/Pedidos/CriarPedidoServer";


class CriarPedidosController{
    async handle(req:Request, res:Response){

        const{ClienteId } =req.body
       console.log("cont:",ClienteId)

        const criarPedidosController = new CriarPedidoServer()
        const CriarPedido = await  criarPedidosController.execute({
            ClienteId 
        })
       // console.log(CriarPedido)
         return res.json(CriarPedido)
    }


}
export{CriarPedidosController}