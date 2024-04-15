import prismaClient from '../../prisma'

interface CriarProdutos {
    nome: string
    fabricante: string
    quantidade: string
    preco: string
    banner: string
    categoriaId: string
}

class CriarProdutosServices {
    async execute({ nome, fabricante, quantidade, preco, banner, categoriaId }: CriarProdutos) {
        if (!nome || !fabricante || !quantidade || !preco || !banner || !categoriaId) {
            throw new Error('Existem campos em branco')
        }

        await prismaClient.produto.create({
            data: {
                nome: nome,
                fabricante: fabricante,
                quantidade: quantidade,
                preco: preco,
                banner: banner,
                categoriaId: categoriaId
            }
        })
        return { dados: 'Cadastro efetuado com sucesso' }
    }
}

export { CriarProdutosServices }