import prismaClient from "../../prisma";



interface EditarPagamento{
    id:string
}


class EditarPagamentoServices{
    async execute({id}:EditarPagamento){

        const editarPagamento = await prismaClient.pagamento.findUnique({
            where:{
                id:id
            },select:{
                
                forma_de_pagamento:true,
                data_de_vencimento:true,
                Identificacao_do_Pagador:true,
                Identificacao_do_Beneficiario:true,
                PedidoId:true 
            }
        })
        return {dados:"Os pagamento foi editado"}
    }
}
export{EditarPagamentoServices}