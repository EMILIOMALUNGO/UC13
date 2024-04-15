import { Request, Response } from "express";
import { AlterarCategoriaServices } from "../../Services/Categoria/AlterarCategoriaServices";


class AlterarCategoriaController{
   async handle(req:Request, res:Response){
    const {id,nomes}=req.body
      
     const alterarCategoriaController = new AlterarCategoriaServices()
     const AlterarCategoria = await alterarCategoriaController.execute({
       id,nomes
     })
      return res.json(AlterarCategoria) 
   }
}
export{AlterarCategoriaController}