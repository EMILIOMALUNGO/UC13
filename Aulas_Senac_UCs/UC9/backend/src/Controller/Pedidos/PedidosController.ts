import { Request, Response } from 'express'
import { PedidosServices } from '../../Services/Pedidos/PedidosServices'


class PedidosController {
    async criarPedidos(req: Request, res: Response) {
        const { id_cliente } = req.body
        const criarPedidoServices = new PedidosServices()
        const resposta = await criarPedidoServices.criarPedido({
            id_cliente
        })
        return res.json(resposta)
    }

    async listarProdutosCategoria(req: Request, res: Response) {
        const { id } = req.params
        const listarProdutosCategoria = new PedidosServices()
        const resposta = await listarProdutosCategoria.listarProdutosCategoria({
            id
        })
        return res.json(resposta)
    }

    async criarItensPedido(req: Request, res: Response) {
        const { id_pedido, id_produto, quantidade, valor } = req.body
        const criarItensPedido = new PedidosServices()
        const resposta = await criarItensPedido.criarItensPedido({
            id_pedido,
            id_produto,
            quantidade,
            valor
        })
        return res.json(resposta)
    }

    async apagarItemPedido(req: Request, res: Response){
        const {id} = req.params
        const apagarItemPedido = new PedidosServices()
        const resposta = await apagarItemPedido.apagarItemPedido({
            id
        })
        return res.json(resposta)
    }

    async somarItensPedido(req: Request, res: Response){
        const {id} = req.params
        const somarItensPedido = new PedidosServices()
        const resposta = await somarItensPedido.somarItensPedidos({
            id
        })
        return res.json(resposta)
    }
}


export { PedidosController }