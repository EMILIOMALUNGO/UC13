import { Request,Response } from "express";
import { ApagarCategoriaServices } from "../../Services/Categoria/ApagarCategoriaServices";




class ApagarCategoriaController{
    async handle(req:Request, res:Response){
        
        const {apagar}=req.body
       
        const apagarCategoriaController = new ApagarCategoriaServices()
        
         const apagarCategoria = await apagarCategoriaController.execute({
            apagar
         })
          return res.json(apagarCategoria)
    }

}
export {ApagarCategoriaController}