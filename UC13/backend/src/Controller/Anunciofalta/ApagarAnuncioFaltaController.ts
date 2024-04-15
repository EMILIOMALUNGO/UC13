import { Request,Response } from "express";
import { ApagarAnuncioFaltaService } from "../../Services/Anunciofalta/ApagarAnuncioFaltaService";




class ApagarAnuncioFaltaController{
    async handle(req:Request, res:Response){      
        const {id}=req.params
        //console.log(id)
      
        const apagarAnuncioFaltaController =new ApagarAnuncioFaltaService()
        const apagarAnuncio = await apagarAnuncioFaltaController.execute({
            id
        })
        return res.json(apagarAnuncio)
    }
}
export {ApagarAnuncioFaltaController}