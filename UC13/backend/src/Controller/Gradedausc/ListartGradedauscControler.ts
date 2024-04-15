import { Request, Response } from "express";
import { ListartGradedauscServer } from "../../Services/Gradedausc/ListartGradedauscServer";



class ListartGradedauscControler {
    async handle(req:Request, res:Response) {
        const listartGradedauscControler = new ListartGradedauscServer()
        const listartGrade= await listartGradedauscControler.execute()
       return res.json(listartGrade)
    }
}
export {ListartGradedauscControler}