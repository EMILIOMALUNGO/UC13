import { Request, Response } from "express";
import { EdiatarReuniaoServer } from "../../Services/Reuniao/EdiatarReuniaoServer.";



class EditarReuniaoController{
 async handle(req:Request, res:Response){

    const {id}= req.params

    const editarReuniaoController =new  EdiatarReuniaoServer ()
    const EditarReuniao = await editarReuniaoController.execute({id}) 

    return res.json(EditarReuniao)
}
}
export {EditarReuniaoController}