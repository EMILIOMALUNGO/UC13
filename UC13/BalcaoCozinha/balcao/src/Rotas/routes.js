import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";




import Login from "../Pages/Login";

import Balcao from "../Pages/Balcao";

import Cozinha from "../Pages/Cozinha";
import ProdutosCategoria from "../Pages/ProdutosCategoria";
import Cadastrar from "../Pages/Cadastrar";
import PedidoNoBalcao from "../Pages/PedidoNoBalcao";
import Pagamento from "../Pages/Pagamento";
import PegarItens from "../Pages/PegarItens";



export default function Rotas() {

  return (
    <BrowserRouter>

      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />

        <Route path="/Balcao" element={<Balcao />} />
        <Route path="/cozinha" element={<Cozinha />} />
          
        <Route path="/produtosCategoria" element={<ProdutosCategoria />} />

        <Route path="/PedidoNoBalcao" element={<PedidoNoBalcao />} />
        <Route path="/PegarItens" element={<PegarItens />} />

        <Route path="/Pagamento" element={<Pagamento />} />
      
      </Routes>

    </BrowserRouter>
  );
}

