import { Request, Response } from "express";
import { AlterarPagamentoServices } from "../../Services/Pagamento/AlterarPagamentoServices";



class AlterarPagamentoController{
    async handle(req:Request, res:Response){
      const {id,forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId} = req.body
      
      const alterarPagamentoController = new AlterarPagamentoServices()
      const alterarPagamento = await alterarPagamentoController.execute({
        id,forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId
      })
        return res.json(alterarPagamento)
    }
}
export {AlterarPagamentoController}