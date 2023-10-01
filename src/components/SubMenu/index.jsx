import React from "react";

import { Container, MenuItem, MenuTitle, Space4 } from './style';

import SubMenuItem from "../SubMenuItem";

import {
    MdKeyboardArrowRight
} from 'react-icons/md';
import Icon from "../Icons";

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
                    <Icon icon={submenu.icon_menu_mnu} /><Space4/><span>{submenu.des_menu_mnu}</span>
                </MenuItem>
            }

            {submenu.children && submenu.children.map((item, index) => (
                <SubMenuItem key={index} subMenuItem={item}/>
            ))}
        </Container>
    )
}