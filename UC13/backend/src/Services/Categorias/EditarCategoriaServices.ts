import prismaClient from "../../prisma";

interface EditarCategoria{
    id:string
}

class EditarCategoriaServices{
    async execute({id}:EditarCategoria){

       const editarCategoria = await prismaClient.categoria.findMany({
        where:{
            id:id
        },select:{
            nomes:true
        }    
       })
       return {dados:"Nome da categoria editada"}
    }
}
export {EditarCategoriaServices}