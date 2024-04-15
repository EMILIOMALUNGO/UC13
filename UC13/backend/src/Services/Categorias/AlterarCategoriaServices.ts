import prismaClient from "../../prisma";

interface AlterarCategoria{
    id:string
    nomes:string
}

class AlterarCategoriaServices{
    async execute({id,nomes}:AlterarCategoria){
  const AlterarCategoria=  await prismaClient.categoria.update({
        where:{
            id:id
        },data:{
            nomes:nomes
        }
    })
    return {dados:"categoria foi alterado"}
}
}
export{AlterarCategoriaServices}