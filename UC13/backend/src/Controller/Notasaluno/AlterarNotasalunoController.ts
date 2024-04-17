import { Request,Response } from "express";

import { AlterarNotasalunoServer } from "../../Services/Notasaluno/AlterarNotasalunoServer";





class AlterarNotasalunoController{
    async handle(req:Request, res:Response){
        const {id,nome,ra,notaB1,notaB2,notaB3,media,falta,usuariosId} = req.body
        
        const alterarNotasalunoController = new  AlterarNotasalunoServer()
        const AlterarNotas = await alterarNotasalunoController.execute({
        id,nome,ra,notaB1,notaB2,notaB3,media,falta,usuariosId
    })
    return res.json(AlterarNotas)
 }

}
export {AlterarNotasalunoController}