import prismaClient from "../../prisma";


interface CriarPedido{
    ClienteId :string  
}



class CriarPedidoServer{
    async execute({ClienteId}:CriarPedido){
       console.log("serv:",ClienteId )
         
        
       const Criarpedido = await prismaClient.pedido.findFirst({})
     
     
       const Pedido = await prismaClient.pedido.create({
             data:{
                ClienteId
             },
             include: {
                clientes:true 
             }  
            })
           /// console.log(dados)
            return {Pedido}  
              
    }
}
export {CriarPedidoServer}