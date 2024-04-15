import prismaClient from "../../prisma";


interface AparClientes{
    apagar:string
}

class AparClienteServices{
    async execute({apagar}:AparClientes){

        const aparClienteServices = await prismaClient.cliente.delete({
            where:{
                id:apagar
            }
        })
         return{dados:"Dados do cliente Apagado"}
    }

}
export {AparClienteServices}