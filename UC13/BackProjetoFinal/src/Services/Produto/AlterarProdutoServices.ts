import prismaClient from "../../prisma";


interface AlterarProduto{
    id:string
    nome  :string,     
    fabricante :string,
    quantidade :string,
    banner :string,
    preco  :string,
    tamanho:string,
    categoriaId:string,
    
}


class AlterarProdutoServices{
  async execute({id,nome,fabricante,quantidade,banner,preco,tamanho,categoriaId}:AlterarProduto){
 
       await prismaClient.produto.update({
        where:{
            id:id,
        },
        data:{
            nome :nome ,     
            fabricante :fabricante,
            quantidade :quantidade,
            banner :banner,
            preco :preco,
            tamanho :tamanho, 
            categoriaId:categoriaId,
            
        }
        
     })
     return {dados:"Produtos alterados"}
  }
}
export{AlterarProdutoServices}
