import { Request,Response } from "express";
import { EditarAtividadeuscServer } from "../../Services/AtividadeVaga/EditarAtividadeuscServer";



class EditarAtividadeVagaController{
    async handle(req:Request, res:Response){

        const {id}= req.params
    
        const editarAtividadeVagaController =new  EditarAtividadeuscServer()
        const EditarAtividade = await editarAtividadeVagaController.execute({id}) 
    
        return res.json(EditarAtividade)
    }
    }
export {EditarAtividadeVagaController}