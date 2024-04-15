import prismaClient from "../../prisma";




interface ApagarPagamento{
    apagar:string
}
class ApagarPagamentoServices{
    async execute({apagar}:ApagarPagamento){
       const apagarPagamento = await prismaClient.pagamento.delete({
        where:{
            id:apagar
        }
       })
       return {dados:"Pagamento excluido "}
    }

}
export{ApagarPagamentoServices}