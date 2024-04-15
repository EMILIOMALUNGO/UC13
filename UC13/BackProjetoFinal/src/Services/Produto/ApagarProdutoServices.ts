import prismaClient from "../../prisma";



interface ApagarProduto{
    apagar:string
}


class ApagarProdutoServices{
   async execute({apagar}:ApagarProduto){
      const apagarProduto = await prismaClient.produto.delete({
        where:{
            id:apagar
        }
      })
      return{dados:"Produto excliudo com sucesso"}
   }
}
export {ApagarProdutoServices}