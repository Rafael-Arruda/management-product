import React from "react";

import logo from '../../assets/logo-dark-zanex.png';

import {MdHome, 
    MdDesignServices, 
    MdPersonAdd, 
    MdAppRegistration,
    MdEditDocument,
    MdStorage,
    MdMoneyOff,
    MdSettings
} from 'react-icons/md';

import { 
    Aside,
    Logo, 
    Nav,
    NavSubMenu,
    NavTitle,
    NavItem,
} from './style';

export default function Sidenav() {
    return(
        <Aside>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Nav>
                <NavSubMenu>
                    <NavTitle>principal</NavTitle>
                    <NavItem>
                        <MdHome size={18}/>
                        <span>Home</span>
                    </NavItem>
                </NavSubMenu>
                
                <NavSubMenu>
                    <NavTitle>cadastro</NavTitle>
                    <NavItem>
                        <MdPersonAdd size={18}/>
                        <span>Clientes</span>
                    </NavItem>
                    <NavItem>
                        <MdDesignServices size={18}/>
                        <span>Serviços</span>
                    </NavItem>
                    <NavItem>
                        <MdAppRegistration size={18}/>
                        <span>Produtos</span>
                    </NavItem>
                </NavSubMenu>

                <NavSubMenu>
                    <NavTitle>Almoxarifado</NavTitle>
                    <NavItem>
                        <MdStorage size={18}/>
                        <span>Estoque</span>
                    </NavItem>
                    <NavItem>
                        <MdEditDocument size={18}/>
                        <span>Relatórios</span>
                    </NavItem>
                </NavSubMenu>

                <NavSubMenu>
                    <NavTitle>Financeiro</NavTitle>
                    <NavItem>
                        <MdMoneyOff size={18}/>
                        <span>Despesas</span>
                    </NavItem>
                    <NavItem>
                        <MdEditDocument size={18}/>
                        <span>Relatórios</span>
                    </NavItem>
                </NavSubMenu>

                <NavSubMenu>
                    <NavTitle>Configurações</NavTitle>
                    <NavItem>
                        <MdSettings size={18}/>
                        <span>Editar Perfil</span>
                    </NavItem>
                </NavSubMenu>
            </Nav>
        </Aside> 
    )
}