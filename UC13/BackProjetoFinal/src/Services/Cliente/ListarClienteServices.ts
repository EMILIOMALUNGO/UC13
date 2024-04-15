import prismaClient from "../../prisma";


class ListarClienteServices{
   async execute(){
    const listarCliente = await prismaClient.cliente.findMany({})
     return(listarCliente) 
   }

}
export{ListarClienteServices}