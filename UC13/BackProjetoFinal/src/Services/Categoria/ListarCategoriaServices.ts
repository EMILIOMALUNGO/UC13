import prismaClient from "../../prisma";


class ListarCategoriaServices{
    async execute(){
        
        const listarCategoria = await prismaClient.categoria.findMany({})
        return(listarCategoria)
    }
}
export{ListarCategoriaServices}