import { Request,Response } from "express";
import { ApagarItemServices } from "../../Services/Item/ApagarItemServices";




class ApagarItemController{
    async handle(req:Request,res:Response){
        const {id}=req.params
         // console.log(id)
      const apagarItemController = new  ApagarItemServices()
      const  apagarItem = await apagarItemController.execute({
        id
      })
        return res.json(apagarItem)
    }
}
export{ApagarItemController}

