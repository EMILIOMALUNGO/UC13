import prismaClient from "../../prisma";





class ListarNotasalunoServer{
    async execute(){
       const ListarNotas = await prismaClient.notasaluno.findMany({
        include:{
            usuarios:true
        }
       })
       return (ListarNotas)
    }
}
export{ListarNotasalunoServer}