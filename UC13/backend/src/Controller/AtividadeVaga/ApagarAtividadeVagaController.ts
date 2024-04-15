import { Request, Response } from "express";
import { ApagarAtividadeVagaServer } from "../../Services/AtividadeVaga/ApagarAtividadeVagaServer";



class ApagarAtividadeVagaController{
    async handle(req:Request, res:Response){      
        const {id}=req.params
        //console.log(id)
      
        const apagarAtividadeVagaController =new ApagarAtividadeVagaServer ()
        const  ApagarAtividade = await apagarAtividadeVagaController.execute({
            id
        })
        return res.json(ApagarAtividade)
    }
}
export {ApagarAtividadeVagaController}