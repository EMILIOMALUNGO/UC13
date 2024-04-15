import prismaClient from "../../prisma";


interface CriarAtividade{
    nome:string
    banner:string
    categoriaId: string 
 
}

class CriarAtividadeServer{
    async execute({nome,banner,categoriaId}:CriarAtividade){
       // console.log("server:",nome,usuarioId,categoriaId)
       
             const  CriarAtivi = await prismaClient.atividadeVaga.create({
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
             return (CriarAtivi)
     }
 } 

export{CriarAtividadeServer}