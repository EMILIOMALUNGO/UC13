import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../Services/Produtos/CriarProdutosServices'


class CriarProdutosController {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, quantidade, preco, categoriaId } = req.body

        if (!req.file) {
            throw new Error('Imagem com problema')
        } else {

            const { originalname, filename: banner } = req.file

            const criarProdutosServices = new CriarProdutosServices()
            const resposta = await criarProdutosServices.execute({
                nome,
                fabricante,
                quantidade,
                preco,
                banner,
                categoriaId
            })
            return res.json(resposta)
        }
    }
}

export { CriarProdutosController }