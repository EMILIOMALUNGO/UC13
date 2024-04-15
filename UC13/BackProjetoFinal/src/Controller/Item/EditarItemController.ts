import { Request,Response } from "express";
import { EditarItemServices } from "../../Services/Item/EditarItemServices";



class EditarItemController{
 async handle(req:Request,res:Response){

    const {id}=req.params
    
    const editarItemController = new EditarItemServices()
    const editarItem = await editarItemController.execute({
        id
    })
    return res.json(editarItem)
 }
 
}
export{EditarItemController}