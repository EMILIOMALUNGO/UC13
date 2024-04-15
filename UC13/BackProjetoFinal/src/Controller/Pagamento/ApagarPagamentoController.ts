import { Request,Response } from "express";
import { ApagarPagamentoServices } from "../../Services/Pagamento/ApagarPagamentoServices";




class ApagarPagamentoController{
   async handle(req:Request, res:Response){

    const {apagar}= req.body
       
        const apagarPagamentoController= new  ApagarPagamentoServices()
        const apagarPagamento = await apagarPagamentoController.execute({
            apagar
        })
        return res.json(apagarPagamento)
   }

}
export {ApagarPagamentoController}