import prismaClient from "../../prisma";


interface Gradedausc{
    nome:string
    banner:string
    categoriaId: string 
   

}

class CriarGradedauscServer{
    async execute({nome,banner,categoriaId}:Gradedausc){
       console.log("server:",nome,categoriaId)
       
             const  CriarGrade = await prismaClient.gradedausc.create({
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
             return (CriarGrade)
             
     }
 
 
 
 } 

export{CriarGradedauscServer}