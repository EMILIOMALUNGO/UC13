import prismaClient from '../../prisma'

class ListarCategoriasServices{
    async execute(){
        const resposta = await prismaClient.categoria.findMany({})
        return resposta
    }
}

export { ListarCategoriasServices }