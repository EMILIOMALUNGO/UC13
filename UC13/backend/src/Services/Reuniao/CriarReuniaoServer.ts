import prismaClient from "../../prisma";


interface CriarReuni{
    nome:string
    banner:string
   
    

}

class CriarReuniaoServer{
    async execute({nome,banner}:CriarReuni){
        //console.log("server:",nome,banner)
       
             const  CriarReuniao = await prismaClient.reuniao.create({
                 data:{
                     nome :  nome,     
                     banner :banner,
                    
                 },select:{
                     nome : true,     
                      banner :true,
                   
                 }
 
             })
           // console.log('3',CriarGrade)
             return (CriarReuniao)
     }
 } 

export{CriarReuniaoServer}