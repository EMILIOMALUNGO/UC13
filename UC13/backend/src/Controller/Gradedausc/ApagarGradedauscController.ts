import { Request,Response } from "express";
import { ApagarGradedauscServer } from "../../Services/Gradedausc/ApagarGradedauscServer";




class ApagarGradedauscController{
    async handle(req:Request, res:Response){      
        const {id}=req.params
        //console.log(id)
      
        const apagarGradedauscController =new ApagarGradedauscServer()
        const  apagarGrade = await apagarGradedauscController.execute({
            id
        })
        return res.json(apagarGrade)
    }
}
export {ApagarGradedauscController}