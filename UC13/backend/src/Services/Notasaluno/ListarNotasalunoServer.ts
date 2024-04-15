import prismaClient from "../../prisma";





class ListarNotasalunoServer{
    async execute(){
       const ListarNotas = await prismaClient.notasaluno.findMany({})
       return (ListarNotas)
    }
}
export{ListarNotasalunoServer}