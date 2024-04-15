import { Request, Response } from "express";
import { CriarItemServices } from "../../Services/Item/CriarItemServices";






class CriarItemController{
    async handle(req: Request, res:Response){
        const {quantidade, valor,ProdutoId,PedidoId}= req.body
        
        //console.log(quantidade, valor,ProdutoId,PedidoId)
        
        const criarItemController = new CriarItemServices()
        const criarItem = await criarItemController.execute({
            quantidade, valor,ProdutoId,PedidoId
        })
        //console.log(criarItem)
        return res.json(criarItem)
    }
}
export {CriarItemController}