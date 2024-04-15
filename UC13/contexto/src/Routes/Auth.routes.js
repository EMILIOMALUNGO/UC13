import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'



import DashBoard from "../Pages/DashBoard";
import Produtos from "../Pages/Produtos";


export default function Authroutes(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DashBoard /> } />
            <Route path="/Produtos" element={<Produtos /> } />
        </Routes>
        </BrowserRouter>
    )
}