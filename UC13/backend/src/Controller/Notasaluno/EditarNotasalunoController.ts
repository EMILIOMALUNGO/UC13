import { Request, Response } from "express";
import { EditarNotasalunoServer } from "../../Services/Notasaluno/EditarNotasalunoServer";




class EditarNotasalunoController{
 async handle(req:Request, res:Response){
   
       const {id}=req.body
    const editarNotasalunoController = new EditarNotasalunoServer()
     const EditarNotas = await editarNotasalunoController.execute({id})
       return res.json(EditarNotas)
    }

}
export {EditarNotasalunoController}