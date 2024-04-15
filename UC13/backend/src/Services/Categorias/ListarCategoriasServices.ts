import prismaClient from '../../prisma'




class ListarCategoriasServices{
    async execute(){
        const resposta = await prismaClient.categoria.findMany({
            include:{
                usuarios: true
            }
        })
        return resposta
    }
}

export { ListarCategoriasServices }