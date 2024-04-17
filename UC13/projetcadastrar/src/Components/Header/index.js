import { Link } from "react-router-dom"

import "./header.css"

export default function Header() {

 
  return (
    <div className="contaiconergeral">
      

            <div id="container1">
              <div id="superior">
             
                <div className="dropdown">
                  <button className="dropbtn"><a href="/Usuario" target="_self">Cadastro de Usuario</a><i className="fa fa-caret-down"></i></button>  
                </div>

                <div className="dropdown">
                  <button className="dropbtn">Gradedauscs<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/Gradedausc" target="_self">Cadastrar Coisas</a>
                  </div>
                </div>  

                <div className="dropdown">
                  <button className="dropbtn">Notas Alunos<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/NotasAlunos" target="_self">Notas/Alunos</a>
                  </div>
                </div> 

                <div className="dropdown">
                  <button className="dropbtn">Reunão<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/Reuniao" target="_self">Reunião</a>
                  </div>
                </div> 

                
                <div className="dropdown">
                  <button className="dropbtn">Atividade e Vaga<i className="fa fa-caret-down"></i> </button>
                  <div className="dropdown-content">
                    <a href="/AtividadeVaga" target="_self">Atividade/Vaga</a>
                  </div>
                </div> 
                
         
                
              </div>
            </div>        
        </div>   

  )
}