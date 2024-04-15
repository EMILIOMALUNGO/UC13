import prismaClient from "../../prisma";



interface ApagarCategoria{
    apagar:string

  }

  class ApagarCategoriaServices{
    async execute({apagar}:ApagarCategoria) {
    
        const apagarCategoria =await prismaClient.categoria.delete({
            where:{
                id:apagar
            }
        })
        return {dados:"Nomde da categoria foi apagado"}
    }
}
export{ApagarCategoriaServices}