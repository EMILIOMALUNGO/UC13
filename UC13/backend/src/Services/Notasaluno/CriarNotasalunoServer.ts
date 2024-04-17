import { Decimal } from "@prisma/client/runtime/library"
import prismaClient from "../../prisma"


interface CriarProduto{
    nome :string
    ra   :string
    notaB1 :number
    notaB2 :number
    notaB3  :number 
    media  :number
    falta  :number
    usuariosId: string
    
}

class CriarNotasalunoServer{
    async execute({nome,ra,notaB1,notaB2,notaB3,media,falta,usuariosId}:CriarProduto){
       // console.log("ser:",nome,fabricante,quantidade,banner,preco,tamanho,cor,categoriaId)

       if (!nome ||!ra ||!notaB1 ||!notaB2 ||!notaB3 ||!media ||!falta ||!usuariosId ) {
        throw new Error("Preencha os campos vasios")          
   }
         
            const  CriarProduto = await prismaClient.notasaluno.create({
        
                data:{
                    nome: nome,
                    ra : ra,   
                    notaB1:notaB1, 
                    notaB2:notaB2,
                    notaB3:notaB3,  
                    media :media,  
                    falta :falta,
                    usuariosId:usuariosId,
                    
                }, select:{
                        nome: true,
                        ra : true, 
                        notaB1:true,
                        notaB2:true,
                        notaB3:true,
                        media : true,
                        falta :true,
                        usuariosId:true,
                        
                }

            })

            return {dados:"produto cadastrado"}
    }



} 
export{CriarNotasalunoServer}