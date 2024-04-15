import { Request, Response } from "express";
import { CriarPagamentoServices } from "../../Services/Pagamento/CriarPagamentoServices";



class CriarPagamentocontroller{
   async handle(req:Request, res:Response){
       
const {forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId}= req.body
//onsole.log("con:",forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId)
    const CriarPagamentocontroller = new CriarPagamentoServices()
    const CriarPagamento = await CriarPagamentocontroller.execute({
        forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId
    })
       return res.json(CriarPagamento)
   }
}
export{CriarPagamentocontroller}
