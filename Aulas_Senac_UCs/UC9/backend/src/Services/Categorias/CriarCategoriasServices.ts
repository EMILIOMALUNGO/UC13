import prismaClient from '../../prisma'

interface CadCategoria{
    nome: string
}

class CriarCategoriasServices{
    async execute({nome}: CadCategoria ){

        const resposta = await prismaClient.categoria.create({
            data:{
                nome
            }
        })
        return {dados: 'Cadastro efetuado com sucesso'}     
    }
}

export { CriarCategoriasServices }

