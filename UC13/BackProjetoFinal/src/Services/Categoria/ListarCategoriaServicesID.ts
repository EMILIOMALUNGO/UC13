import prismaClient from "../../prisma";


interface ListarCategoriaID{
    id:string
}


class ListarCategoriaServicesID{
 async execute({id}:ListarCategoriaID){

    const ListarCategorID = await prismaClient.categoria.findUnique({
         where:{
            id:id
         },
         select:{
            nomes:true
         }
    })
   return(ListarCategorID)
 }
}
export{ListarCategoriaServicesID}