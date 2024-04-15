import { Request, Response } from "express";
import { EditarCategoriaServices } from "../../Services/Categoria/EditarCategoriaServices";


class EditarCategoriaController{
    async handle(req:Request, res:Response){
        const {id}= req.params
      const EditarCategoriaController = new  EditarCategoriaServices()
      const  editarCategoria = await EditarCategoriaController.execute({
          id
      })
      return res.json(editarCategoria)
    }

}
export {EditarCategoriaController}