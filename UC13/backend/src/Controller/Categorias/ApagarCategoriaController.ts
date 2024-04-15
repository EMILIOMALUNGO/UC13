import { Request,Response } from "express";
import { ApagarCategoriaServices } from "../../Services/Categorias/ApagarCategoriaServices";



class ApagarCategoriaController{
    async handle(req:Request, res:Response){
        
        const {id}=req.params
       
        const apagarCategoriaController = new ApagarCategoriaServices()
        
         const apagarCategoria = await apagarCategoriaController.execute({
            id
         })
          return res.json(apagarCategoria)
    }

}
export {ApagarCategoriaController}