import prismaClient from "../../prisma";



interface  ListarAtividade{
    id:string
}

class ListarAtividadeVagaServerID{
    async execete({id}:ListarAtividade){
        
        const ListarAtividade = await prismaClient.atividadeVaga.findUnique({
               where:{
                   id:id
               },select:{
                   nome : true,     
                   banner :true,
                   categoriaId:true,
   
               }
           })
           return (ListarAtividade )         
       }
   }

export {ListarAtividadeVagaServerID}