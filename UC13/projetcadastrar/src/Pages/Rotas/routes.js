import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Login from "../Login";
import Usuario from "../Usuario";

import CadastroPessoas from "../CadastroPessoas";
import CadastrarCoisas from "../CadastrarCoisas";
import NotasAlunos from "../NotasAlunos";
import Reuniao from "../Reuniao";
import AtividadeVaga from "../AtividadeVaga";


export default function Rotas(){

   return(
  <BrowserRouter>
  <Routes>
  Usuario
  <Route path="/" element={<Login />} />
  <Route path="/Usuario" element={<Usuario />} />
  <Route path="/CadastroPessoas" element={<CadastroPessoas />} />
  <Route path="/CadastrarCoisas" element={<CadastrarCoisas />} />
  <Route path="/NotasAlunos" element={<NotasAlunos />} />
  <Route path="/Reuniao" element={<Reuniao  />} />
  <Route path="/AtividadeVaga" element={<AtividadeVaga />} />

  </Routes> 
  </BrowserRouter>
   )

}