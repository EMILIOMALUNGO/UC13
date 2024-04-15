import { Link } from "react-router-dom"

import "./header.css"

export default function Header() {

 
  return (
    <div className="contaiconergeral">
      

            <div id="container1">
              <div id="superior">
             
                <div className="dropdown">
                  <button className="dropbtn"><a href="/Balcao" target="_self">Balcao</a><i className="fa fa-caret-down"></i></button>  
                </div>

                <div className="dropdown">
                  <button className="dropbtn">Cozinha<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/Cozinha" target="_self">Cozinha</a>
                  </div>
                </div>

                <div className="dropdown">
                  <button className="dropbtn">Pedido No Balcao<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/PedidoNoBalcao" target="_self">Balcão</a>
                  </div>
                </div>

           
                  <div className="dropdown">
                  <button className="dropbtn">cadastrado/Produto<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/ProdutosCategoria" target="_self">Produto/Categorias</a>
                  </div>
                </div>
                
              </div>
            </div>


         
        </div>   

  )
}