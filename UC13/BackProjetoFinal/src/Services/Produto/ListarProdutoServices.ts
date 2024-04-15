import prismaClient  from "../../prisma";




interface ListarProduto{
   id: string
}

class ListarProdutoServices{
     async execute({id}:ListarProduto){
      //console.log(id)
       
        const listarProduto = await prismaClient.produto.findMany({
         where:{
            OR:[
              {
                  categoriaId:id
              },
              {
                id:id
              }

            ]} , select:{
         id:true,
         nome : true,   
         fabricante :true,
         quantidade :true,
         banner     : true,
         preco      : true,
         tamanho    :true,
         
        },
        })
        return(listarProduto)
     }
}
export {ListarProdutoServices}