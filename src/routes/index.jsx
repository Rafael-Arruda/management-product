import { Route, Routes } from 'react-router-dom';

//Pages
import Empty from "../pages/Empty";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterMaterial from "../pages/RegisterMaterial";

import ListIcons from '../pages/Debug/ListIcons';
import Layout from '../pages/Layout';
import Service from '../pages/Servico';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/empty" element={<Empty />} />
                <Route path="/cadastroMaterial" element={<RegisterMaterial />} />
                <Route path="/service" element={<Service />} />
                <Route path="/listicons" element={<ListIcons />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default RoutesApp;