import { Request, Response } from "express";
import { EditarGradedauscServer } from "../../Services/Gradedausc/EditarGradedauscServer";



class EditarGradedauscController{
 async handle(req:Request, res:Response){

    const {id}= req.params

    const editarGradedauscController=new EditarGradedauscServer()
    const EditarGrade = await editarGradedauscController.execute({id}) 

    return res.json(EditarGrade)
}
}
export {EditarGradedauscController}