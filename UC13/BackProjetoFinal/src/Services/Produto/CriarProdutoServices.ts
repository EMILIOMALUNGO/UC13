import prismaClient from "../../prisma";


interface CriarProduto{
    nome       : string   
    fabricante : string
    quantidade : string
    banner     : string
    preco      : string
    tamanho    : string
    categoriaId: string  
    
}

class CriarProdutoServices{
    async execute({nome,fabricante,quantidade,banner,preco,tamanho,categoriaId}:CriarProduto){
       // console.log("ser:",nome,fabricante,quantidade,banner,preco,tamanho,cor,categoriaId)

         if (!nome||!fabricante||!quantidade||!banner||!preco||!tamanho||!categoriaId ) {
              throw new Error("Preencha os campos vasios")          
         }
            const  CriarProduto = await prismaClient.produto.create({
                data:{
                    nome :  nome,     
                    fabricante :fabricante,
                    quantidade :quantidade ,
                    banner :banner,
                     preco  :preco ,
                    tamanho:tamanho,
                     categoriaId:categoriaId,
                },select:{
                    nome : true,     
                    fabricante :true,
                    quantidade :true ,
                     banner :true,
                     preco  :true ,
                    tamanho:true,
                    categoriaId:true,
                }

            })

            return {dados:"produto cadastrado"}
    }



} 
export{CriarProdutoServices}