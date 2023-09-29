import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/auth";
import { PaginationContext } from '../../contexts/pagination';

import logo from '../../assets/logo-dark-zanex.png';


import {
    MdKeyboardArrowDown,
    MdKeyboardArrowRight
} from 'react-icons/md';


import Icon from '../Icons';

import Menu from "../Menu";

import {
    Aside,
    Logo,
    Nav,
    NavItem,
    NavSubMenu,
    NavTitle,
} from './style';

export default function Sidenav() {

    const { userMenu } = useContext(AuthContext);

    const { handlePagination } = useContext(PaginationContext);

    return (
        <Aside>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Nav>
                {userMenu.map((item, index) => (
                    <Menu key={index} menu={item}/>
                ))}


                {/* {userMenu.map((item, index) => (
                    <NavSubMenu key={item.id_menu_mnu}>
                        <NavTitle onClick={() => handleShowMenu(index)}>
                            <h3><Icon icon={item.icon_menu_mnu} />  <span style={{ marginRight: 4 }} />{item.des_menu_mnu}</h3>
                            {item.children ?
                                showMenus[index] ? <MdKeyboardArrowDown size={18} color="#76839a" /> : <MdKeyboardArrowRight size={18} color="#76839a" />
                                :
                                ""
                            }
                        </NavTitle>
                        {item.children && item.children.map((value) => (
                            showMenus[index] &&
                            <NavItem key={value.id_menu_mnu} onClick={() => handlePagination(`${item.des_menu_mnu}`, [`${item.des_menu_mnu}`, `${value.des_menu_mnu}`])}>
                                <Icon icon={value.icon_menu_mnu} />  <span style={{ marginLeft: 4 }}>{value.des_menu_mnu}</span>
                            </NavItem>
                        ))}
                    </NavSubMenu>
                ))} */}
            </Nav>
        </Aside>
    )
}