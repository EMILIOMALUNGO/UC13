import prismaClient from "../../prisma";



interface EditarProduto{
    id:string
}

class EditarProdutoServices{
    async execute({id}:EditarProduto){

        const editarProduto = await prismaClient.produto.findUnique({
            where:{
                id:id
            },select:{
                nome:true,
                fabricante:true,
                quantidade:true,
                preco:true,
                tamanho:true,
                categoriaId:true,
               
            }
        })
         return {dados:"produto alterado com sucesso"}
    }

}

export{EditarProdutoServices}