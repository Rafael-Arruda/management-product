import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from "../pages/Home";
import Empty from "../pages/Empty";

import Private from "./Private";

function RoutesApp() {
    return(
        <Routes>
            
            <Route path="/" element={ <Private><Home/></Private> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/empty" element={ <Private><Empty/></Private> }/> 
            
        </Routes>
    )
}

export default RoutesApp;