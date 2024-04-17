import { Request, Response } from "express";
import { AlterarAtividadeVagaServer } from "../../Services/AtividadeVaga/AlterarAtividadeVagaServer";




class AlterarAtividadeVagaController{
    async handle(req:Request, res:Response){

        const {id,nome,banner} = req.body
        const alterarAtividadeVagaController = new AlterarAtividadeVagaServer()
        const alterarAtividade = await alterarAtividadeVagaController.execute({
        id, nome,banner
        })
        return res.json(alterarAtividade )
      }
     }
export {AlterarAtividadeVagaController}