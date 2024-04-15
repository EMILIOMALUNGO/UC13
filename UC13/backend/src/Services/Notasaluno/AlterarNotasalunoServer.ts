import { Decimal } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface AlterarNota{
  
    id:   string
    nome :string
    ra   :string
    notaB1 : number
    notaB2 : number
    notaB3  : number
    media  : number
    falta  : number
    categoriaId: string
    
}


class AlterarNotasalunoServer{
  async execute({id,nome,ra,notaB1,notaB2,notaB3,media,falta,categoriaId}:AlterarNota){
         
    const AlterarNotas = await prismaClient.notasaluno.update({
        where:{
            id:id

        },data:{
            nome :nome,
            ra   :ra,
            notaB1:notaB1,
            notaB2 :notaB2,
            notaB3  :notaB3,
            media  :media,
            falta  :falta,
            categoriaId: categoriaId,
            
        }
    })
    return (AlterarNotas)
  }
}
export {AlterarNotasalunoServer}