import React from "react";

import {Container, MenuTitle} from './style';

import SubMenu from "../SubMenu";

import {
    MdKeyboardArrowDown,
    MdKeyboardArrowRight
} from 'react-icons/md';

export default function Menu({menu, showMenu}) {
    
    console.log(menu)

    return(
        <Container>
            {menu.children?
                <div className="menu-item">
                    <MenuTitle>{menu.des_menu_mnu}</MenuTitle>
                    <MdKeyboardArrowRight size={18} color="#76839a"/>
                </div>
            :
                <div className="menu-item">
                    <MenuTitle>{menu.des_menu_mnu}</MenuTitle>
                </div>
            }

            {menu.children && menu.children.map((item, index) => (
                <SubMenu key={index} submenu={item}/>
            ))}
        </Container>
    )
}