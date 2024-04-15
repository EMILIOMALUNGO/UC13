import { Request, Response } from "express";
import { EditarAnuncioFaltaService } from "../../Services/Anunciofalta/EditarAnuncioFaltaService";



class EditarAnuncioFaltaController{
 async handle(req:Request, res:Response){

    const {id}= req.params

    const editarAnuncioFaltaController =new EditarAnuncioFaltaService()
    const EditarGrade = await editarAnuncioFaltaController.execute({id}) 

    return res.json(EditarGrade)
}
}
export {EditarAnuncioFaltaController}