import prismaClient from "../../prisma";




class ListarProdutoS{
    async execute(){

        const ListarProduto = await prismaClient.produto.findMany({})
        return(ListarProduto)
    }
}
export {ListarProdutoS}