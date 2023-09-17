import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import Material from "./pages/Material";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/empty" element={ <Empty/> }/>
                <Route path="/cadastroMaterial" element={ <Material/> }/>

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;