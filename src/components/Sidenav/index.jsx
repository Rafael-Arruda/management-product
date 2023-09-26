import React, {useContext, useEffect, useState} from "react";

import { AuthContext } from "../../contexts/auth";
import { PaginationContext } from '../../contexts/pagination';

import logo from '../../assets/logo-dark-zanex.png';

import {MdHome, 
    MdDesignServices, 
    MdPersonAdd, 
    MdAppRegistration,
    MdEditDocument,
    MdStorage,
    MdMoneyOff,
    MdSettings,
    MdKeyboardArrowRight,
    MdKeyboardArrowDown,
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

    const { userMenu } = useContext(AuthContext);
    const {handlePagination} = useContext(PaginationContext);

    const [showMenus, setShowMenus] = useState(new Array(userMenu.length).fill(false));

    function handleShowMenu(index) {
        const newArray = [...showMenus];
        newArray[index] = !newArray[index];

        setShowMenus(newArray);
    }

    return(
        <Aside>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Nav>
                {userMenu.map((item, index) => (
                    <NavSubMenu key={item.id_menu_mnu}>
                        <NavTitle onClick={() => handleShowMenu(index)}>
                            <h3>{item.des_menu_mnu}</h3>
                            {item.children?  
                                showMenus[index]? <MdKeyboardArrowDown size={18} color="#76839a"/> : <MdKeyboardArrowRight size={18} color="#76839a"/>
                                : 
                                ""
                            }
                        </NavTitle>
                        {item.children && item.children.map((value) => (
                            showMenus[index] &&
                            <NavItem key={value.id_menu_mnu} onClick={() => handlePagination(`${item.des_menu_mnu}`, [`${item.des_menu_mnu}`, `${value.des_menu_mnu}`])}>
                                <span>{value.des_menu_mnu}</span>
                            </NavItem>
                        ))}
                    </NavSubMenu>
                ))}
            </Nav>
        </Aside> 
    )
}