import prismaClient  from "../../prisma";



class ListarClienteServer{
   async execute(){

    const listarCliente = await prismaClient.cliente.findMany({})
    return (listarCliente)
   }
}
export {ListarClienteServer}