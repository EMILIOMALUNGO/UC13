import { Request, Response } from "express";
import { CriarNotasalunoServer } from "../../Services/Notasaluno/CriarNotasalunoServer";



class CriarNotasalunoControllr{
async handle(req:Request, res:Response){

    const {nome,ra,notaB1,notaB2,notaB3,media,falta,usuariosId} = req.body
       
    const CriarNotasalunoControllr = new CriarNotasalunoServer()
        const CriarNotas = await CriarNotasalunoControllr.execute({
            nome,ra,notaB1,notaB2,notaB3,media,falta,usuariosId
        })
    
    return res.json(CriarNotas)
}
}

export {CriarNotasalunoControllr}