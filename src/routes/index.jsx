import { Route, Routes } from 'react-router-dom';

//Pages
import Page404 from "../pages/404";
import Empty from "../pages/Empty";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterMaterial from "../pages/RegisterMaterial";

import Unidade from '../pages/CadastroBase/Almoxarifado/Unidade';
import TipoServico from '../pages/CadastroBase/Servico/TipoServico';
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
                <Route path="/cadastro-base/servico/tipo-servico" element={<TipoServico />} />
                <Route path="/cadastro-base/almoxarifado/unidade" element={<Unidade />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default RoutesApp;