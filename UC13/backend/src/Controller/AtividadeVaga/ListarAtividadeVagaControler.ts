import { Request, Response } from "express"
import { ListarAtividadeVagaServices } from "../../Services/AtividadeVaga/ListarAtividadeVagaServices"





class ListarAtividadeVagaControler{
    async handle(req:Request, res:Response) {
        const listarAtividadeVagaControler = new ListarAtividadeVagaServices()
        const ListarAtividade= await listarAtividadeVagaControler.execute()
       return res.json(ListarAtividade)
    }

}
export {ListarAtividadeVagaControler}