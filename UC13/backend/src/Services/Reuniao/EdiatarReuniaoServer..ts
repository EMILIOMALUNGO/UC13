import prismaClient from "../../prisma";



interface EdiatarReuniao {
    id:string
}

class EdiatarReuniaoServer{
    async execute({id}:EdiatarReuniao){

        const ediatar = await prismaClient.reuniao.findUnique({
            where:{
                id:id
            },select:{
                nome:true,
                banner:true
            }
        })
        return(ediatar)
    }
}
export {EdiatarReuniaoServer}