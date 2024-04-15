import { Request, Response } from "express";
import { AlterarAtividadeVagaServer } from "../../Services/AtividadeVaga/AlterarAtividadeVagaServer";




class AlterarAtividadeVagaController{
    async handle(req:Request, res:Response){

        const {id,nome,banner,categoriaId} = req.body
        const alterarAtividadeVagaController = new AlterarAtividadeVagaServer()
        const alterarAtividade = await alterarAtividadeVagaController.execute({
        id, nome,banner,categoriaId
        })
        return res.json(alterarAtividade )
      }
     }
export {AlterarAtividadeVagaController}