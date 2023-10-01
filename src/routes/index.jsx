import { Route, Routes } from 'react-router-dom';

//Pages
import Empty from "../pages/Empty";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterMaterial from "../pages/RegisterMaterial";

import ListIcons from '../pages/Debug/ListIcons';
import Service from '../pages/Servico';
import Private from "./Private";

function RoutesApp() {
    return(
        <Routes>
            
            <Route path="/" element={ <Private><Home/></Private> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/empty" element={ <Private><Empty/></Private> }/> 
            <Route path="/cadastroMaterial" element={ <RegisterMaterial/> }/>
            <Route path="/service" element={ <Service /> }/>
            <Route path="/listicons" element={ <ListIcons /> }/>
            
        </Routes>
    )
}

export default RoutesApp;