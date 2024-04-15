import { Request,Response } from "express";
import { SomarItemServices } from "../../Services/Item/SomarItemServices";



class SomarItemController{
    async handle(req:Request, res:Response){

        const {id} = req.params
       // console.log('c',id)
     const somarItemController = new SomarItemServices()
     const somarItem = await somarItemController.execute({id})
     return res.json(somarItem)
    }
}
export {SomarItemController}