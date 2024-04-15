import { Request,Response } from "express";
import { ApagarReuniaoServer } from "../../Services/Reuniao/ApagarReuniaoServer";




class  ApagarReuniaoController{
    async handle(req:Request, res:Response){      
        const {id}=req.params
        //console.log(id)
      
        const apagarReuniaoController=new ApagarReuniaoServer ()
        const  apagar = await apagarReuniaoController.execute({
            id
        })
       // console.log(apagar)
        return res.json(apagar)
    }
}
export {ApagarReuniaoController}