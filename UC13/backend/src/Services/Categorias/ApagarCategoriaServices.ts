import prismaClient from "../../prisma";



interface ApagarCategoria{
    id:string

  }

  class ApagarCategoriaServices{
    async execute({id}:ApagarCategoria) {
    
        const apagarCategoria =await prismaClient.categoria.delete({
            where:{
                id:id
            }
        })
        return {dados:"Nomde da categoria foi apagado"}
    }
}
export{ApagarCategoriaServices}