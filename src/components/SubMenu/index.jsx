import React from "react";

import { Container, MenuTitle, MenuItem } from './style';

import SubMenuItem from "../SubMenuItem";

import {
    MdKeyboardArrowDown,
    MdKeyboardArrowRight
} from 'react-icons/md';

export default function SubMenu({submenu}) {
    return(
        <Container> 
            {submenu.children?
                <div className="submenu-item">
                    <MenuTitle hasChildren={true}>{submenu.des_menu_mnu}</MenuTitle>
                    <MdKeyboardArrowRight size={18} color="#76839a"/>
                </div>
            :
                <MenuItem>
                    <span>{submenu.des_menu_mnu}</span>
                </MenuItem>
            }

            {submenu.children && submenu.children.map((item, index) => (
                <SubMenuItem key={index} subMenuItem={item}/>
            ))}
        </Container>
    )
}