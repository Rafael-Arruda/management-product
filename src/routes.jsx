import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import Empty from "./pages/Empty";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/empty" element={ <Empty/> }/> 

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;