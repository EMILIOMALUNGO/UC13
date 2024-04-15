import prismaClient from "../../prisma";



class ListarPagamentosServices{
      async execute(){
        const listarPagamentos = await prismaClient.pagamento.findMany({})
        return(listarPagamentos)
      }

}
export{ListarPagamentosServices}