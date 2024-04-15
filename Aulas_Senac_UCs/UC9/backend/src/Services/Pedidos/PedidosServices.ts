import prismaClient from '../../prisma'

interface IdCliente {
    id_cliente: string
}
interface ListarProdutos {
    id: string
}
interface CriarItensPedido{
    id_pedido: string
    id_produto: string
    quantidade: number
    valor: number
}

class PedidosServices {
    async criarPedido({ id_cliente }: IdCliente) {
        const resposta = await prismaClient.pedido.create({
            data: {
                id_cliente
            },
            include: {
                clientes: true
            }
        })
        return resposta
    }
    async listarProdutosCategoria({ id }: ListarProdutos) {
        const resposta = await prismaClient.produto.findMany({
            where: {
                categoriaId: id
            }
        })
        return resposta
    }

    async criarItensPedido({id_pedido, id_produto, quantidade, valor}: CriarItensPedido){
        const itemExite = await prismaClient.itemPedido.findFirst({
            where: {
                AND: [
                    {
                        id_produto: id_produto
                    },
                    {
                        id_pedido: id_pedido
                    }
                ]
            }
        })

        if(itemExite){
            throw new Error ('Item Já Adicionado')
        }

        const resposta = await prismaClient.itemPedido.create({
            data:{
                id_pedido: id_pedido,
                id_produto: id_produto,
                quantidade: quantidade,
                valor: valor
            },
            include:{
                produtos: true
            }
        })
        return resposta
    }

    async apagarItemPedido({id}: ListarProdutos){
        await prismaClient.itemPedido.delete({
            where: {
                id: id
            }
        })
        return {dados: 'Item Deletado'}
    }

    async somarItensPedidos({id}: ListarProdutos){
       const resposta = await prismaClient.itemPedido.aggregate({
           _sum: {
               valor: true
            },
            where: {
                id_pedido: id
            }
        })
       return resposta._sum.valor
    }

    
}

export { PedidosServices }