import { Route, Routes } from 'react-router-dom';

//Pages
import Empty from "../pages/Empty";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterMaterial from "../pages/RegisterMaterial";

import Estoque from '../pages/CadastroBase/Almoxarifado/Estoque';
import Material from '../pages/CadastroBase/Almoxarifado/Material';
import Unidade from '../pages/CadastroBase/Almoxarifado/Unidade';
import TipoServico from '../pages/CadastroBase/Servico/TipoServico';
import ListIcons from '../pages/Debug/ListIcons';
import Page404 from '../pages/ErrorPage/404';
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
                <Route path="/servico/novo" element={<Service reg={{}} />} />
                <Route path="/listicons" element={<ListIcons />} />
                <Route path="/cadastro-base/servico/tipo-servico" element={<TipoServico />} />
                <Route path="/cadastro-base/almoxarifado/unidade" element={<Unidade />} />
                <Route path="/cadastro-base/almoxarifado/material" element={<Material />} />
                <Route path="/cadastro-base/almoxarifado/estoque" element={<Estoque />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default RoutesApp;