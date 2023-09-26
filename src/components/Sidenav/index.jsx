import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/auth";

import logo from '../../assets/logo-dark-zanex.png';

import {
    MdKeyboardArrowDown,
    MdKeyboardArrowRight
} from 'react-icons/md';

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
    console.log(userMenu)

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
                            <NavItem key={value.id_menu_mnu}>
                                <span>{value.des_menu_mnu}</span>
                            </NavItem>
                        ))}
                    </NavSubMenu>
                ))}
            </Nav>
        </Aside> 
    )
}