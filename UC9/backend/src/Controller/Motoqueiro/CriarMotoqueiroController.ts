
import { Request,Response } from "express";

import { CriarMotoqueiroServer } from "../../Services/Motoqueiro/CriarMotoqueiroServer";


class CriarMotoqueiroController{
  async handle(req:Request,res:Response){

    const {nome,nusuario,password} = req.body

    const criarMotoqueiroController = new CriarMotoqueiroServer()
    const CriarMotoqueiro = await criarMotoqueiroController.execute({
         nome,nusuario,password
    })
    return  res.json(CriarMotoqueiro)
  }

}

export {CriarMotoqueiroController}