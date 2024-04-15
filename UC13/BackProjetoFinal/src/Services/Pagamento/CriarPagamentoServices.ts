import prismaClient from "../../prisma";




interface CriarPamento{                      
                   
    forma_de_pagamento:string,          
    data_de_vencimento:string,       
    Identificacao_do_Pagador :string,
   Identificacao_do_Beneficiario:string
   PedidoId :string
}




class CriarPagamentoServices{
async execute({forma_de_pagamento,data_de_vencimento,Identificacao_do_Pagador,Identificacao_do_Beneficiario,PedidoId }:CriarPamento){
    
      if (!forma_de_pagamento||!data_de_vencimento||!Identificacao_do_Pagador||!Identificacao_do_Beneficiario||!PedidoId ) {
        throw new Error("Preenche os campos vasios")
      }
    const CriarPamento = await prismaClient.pagamento.findFirst({
        where:{
            Identificacao_do_Pagador:Identificacao_do_Pagador
        }
    })
    if (CriarPamento) {
        throw new Error("Identificacao do Pagador não pode ser alterado")
    }    

    const comopaga = await prismaClient.pagamento.create({
        data:{
                             
            forma_de_pagamento:forma_de_pagamento,          
            data_de_vencimento:data_de_vencimento,
             Identificacao_do_Pagador : Identificacao_do_Pagador ,
            Identificacao_do_Beneficiario:Identificacao_do_Beneficiario,
            PedidoId : PedidoId 
       
        }, select:{
                      
            forma_de_pagamento:true,          
            data_de_vencimento:true,
             Identificacao_do_Pagador : true,
            Identificacao_do_Beneficiario:true
    
        }     
    })
    return {dados:"pagamento efetuado com sucesso"}
}}

export{CriarPagamentoServices}