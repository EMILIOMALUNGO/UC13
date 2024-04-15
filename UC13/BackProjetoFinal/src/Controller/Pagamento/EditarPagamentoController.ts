import { Request, Response } from "express";
import { EditarPagamentoServices } from "../../Services/Pagamento/EditarPagamentoServices";



class EditarPagamentoController{
    async handle(req:Request, res:Response){

        const {id}= req.params
        
        const editarPagamentoController = new EditarPagamentoServices ()
        const editarPagamento = await  editarPagamentoController.execute({
            id
        })
        return res.json(editarPagamento)
    }
}
export{EditarPagamentoController}