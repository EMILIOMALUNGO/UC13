import prismaClient from "../../prisma";



interface AlterarPagamento{
    id:string                  
    forma_de_pagamento:string,          
    data_de_vencimento:string,       
    Identificacao_do_Pagador :string,
   Identificacao_do_Beneficiario:string
   PedidoId :string
}

class AlterarPagamentoServices{
    async execute({id,forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId}:AlterarPagamento ){

        const alterarPagamento = await prismaClient.pagamento.update({
            where:{
                id:id
            },data:{
             forma_de_pagamento:forma_de_pagamento,
             data_de_vencimento:data_de_vencimento,
             Identificacao_do_Pagador:Identificacao_do_Pagador,
             Identificacao_do_Beneficiario:Identificacao_do_Beneficiario,
             PedidoId:PedidoId 
            }
        })
         return {dados:("Pagamento alterado com sucesso")}
    }

}
export{AlterarPagamentoServices}
