import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DashBoard from '../Dashboard'


export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}
