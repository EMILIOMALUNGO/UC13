import prismaClient from "../../prisma";



interface editarNotas{
    id:string
}

class EditarNotasalunoServer{
    async execute({id}:editarNotas){

        const EditarNota = await prismaClient.notasaluno.findUnique({
            where:{
                id:id
            },select:{
                nome :true,
                ra   :true,
                notaB1 :true,
                notaB2 :true,
                notaB3  :true,
                media  :true,
                falta  :true,
                categoriaId:true,
              
        
        }})
      return (EditarNota)
    }
}
export{EditarNotasalunoServer}