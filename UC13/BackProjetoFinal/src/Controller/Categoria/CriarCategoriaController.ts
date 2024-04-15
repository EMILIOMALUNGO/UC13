import { Request,Response } from "express";
import { CriarCategiriaServices } from "../../Services/Categoria/CriarCategiriaServices";


class CriarCategoriaController{
    async handle(req:Request, res:Response){
        const {nomes}= req.body
        
        const CriarCategoriaController = new CriarCategiriaServices ()
        const CriarCategiria = await CriarCategoriaController.execute({
            nomes
        })
        return res.json(CriarCategiria)
    }

}
export {CriarCategoriaController}