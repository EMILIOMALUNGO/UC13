import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Login from "../Login";
import Usuario from "../Usuario";
import NotasAlunos from "../NotasAlunos";
import Reuniao from "../Reuniao";
import AtividadeVaga from "../AtividadeVaga";
import Gradedausc from "../Gradedausc"

export default function Rotas(){

   return(
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Login />} />
  <Route path="/Usuario" element={<Usuario />} />
  <Route path="/NotasAlunos" element={<NotasAlunos />} />
  <Route path="/Reuniao" element={<Reuniao  />} />
  <Route path="/AtividadeVaga" element={<AtividadeVaga />} />
  <Route path="/Gradedausc" element={<Gradedausc />} />

  </Routes> 
  </BrowserRouter>
   )

}