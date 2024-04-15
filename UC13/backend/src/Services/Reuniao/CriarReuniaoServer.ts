import prismaClient from "../../prisma";


interface CriarReuni{
    nome:string
    banner:string
    categoriaId: string 
    

}

class CriarReuniaoServer{
    async execute({nome,banner,categoriaId}:CriarReuni){
        console.log("server:",nome,categoriaId)
       
             const  CriarReuniao = await prismaClient.reuniao.create({
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
             return (CriarReuniao)
     }
 } 

export{CriarReuniaoServer}