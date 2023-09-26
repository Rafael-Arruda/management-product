import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import RegisterMaterial from "./pages/RegisterMaterial";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/empty" element={ <Empty/> }/>
                <Route path="/cadastroMaterial" element={ <RegisterMaterial/> }/>

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;