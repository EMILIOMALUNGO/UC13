import prismaClient from "../../prisma";


interface CriarAnuncio{
    nome:string
    banner:string
    categoriaId: string 
  

}

class CriarAnuncioFaltaService{
    async execute({nome,banner,categoriaId}:CriarAnuncio){
       console.log("server:",nome,categoriaId)
       
             const CriarAnunci = await prismaClient.anunciofalta.create({
                 data:{
                     nome :  nome,     
                     banner :banner,
                     
                     categoriaId:categoriaId,
                    
                 },select:{
                     nome : true,     
                      banner :true,
                      categoriaId:true,
                 }
 
             })
           // console.log('3',CriarGrade)
             return (CriarAnunci)
             
     }
 
 
 
 } 

export{CriarAnuncioFaltaService}