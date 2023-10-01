import React from "react";

import { Container, MenuTitle, Space4 } from './style';

import SubMenu from "../SubMenu";

import {
    MdKeyboardArrowRight
} from 'react-icons/md';
import Icon from "../Icons";

export default function Menu({ menu, showMenu }) {


    return (
        <Container>
            {menu.children ?
                <div className="menu-item">
                    <MenuTitle>{menu.des_menu_mnu}</MenuTitle>
                    <MdKeyboardArrowRight size={18} color="#76839a" />
                </div>
                :
                <div className="menu-item">

                    <MenuTitle><Icon icon={menu.icon_menu_mnu} /><Space4 />{menu.des_menu_mnu}</MenuTitle>
                </div>
            }

            {menu.children && menu.children.map((item, index) => (
                <SubMenu key={index} submenu={item} />
            ))}
        </Container>
    )
}