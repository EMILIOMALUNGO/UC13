import prismaClient from '../../prisma'

interface CadCategoria{
    nomes: string
}

class CriarCategoriasServices{
    async execute({nomes}: CadCategoria ){

        const resposta = await prismaClient.categoria.create({
            data:{
                nomes:nomes
            },select:{
                nomes:true
            }
        })
        return {dados: 'Cadastro efetuado com sucesso'}     
    }
}

export { CriarCategoriasServices }

