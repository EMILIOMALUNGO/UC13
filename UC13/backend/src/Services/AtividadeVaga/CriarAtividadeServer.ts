import prismaClient from "../../prisma";


interface CriarAtividade{
    nome:string
    banner:string

 
}

class CriarAtividadeServer{
    async execute({nome,banner}:CriarAtividade){
       // console.log("server:",nome,usuarioId,categoriaId)
       
             const  CriarAtivi = await prismaClient.atividadeVaga.create({
                 data:{
                     nome :  nome,     
                     banner :banner,
                    
                    
                    
                 },select:{
                     nome : true,     
                      banner :true,
             
                    
                 }
 
             })
           // console.log('3',CriarGrade)
             return (CriarAtivi)
     }
 } 

export{CriarAtividadeServer}