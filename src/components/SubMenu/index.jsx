import React, { useState } from "react";

import { Container, FlexRowStart, MenuItem, MenuTitle } from './style';

import SubMenuItem from "../SubMenuItem";

import {
    MdKeyboardArrowDown,
    MdKeyboardArrowRight
} from 'react-icons/md';
import Icon from "../Icons";

export default function SubMenu({submenu}) {
    
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }
    
    return(
        <Container> 
            {submenu.children?
                <div className="submenu-item" onClick={() => handleShowMenu()}>
                    <FlexRowStart>
                        <Icon icon={submenu.icon_menu_mnu} />
                        <MenuTitle hasChildren={true}>{submenu.des_menu_mnu}</MenuTitle>
                    </FlexRowStart>
                    {showMenu? <MdKeyboardArrowDown size={18} color="#78839a"/> : <MdKeyboardArrowRight size={18} color="#78839a"/> }
                </div>
            :
                <MenuItem onClick={()=>{}}>
                    <Icon icon={submenu.icon_menu_mnu} /><span>{submenu.des_menu_mnu}</span>
                </MenuItem>
            }

            {showMenu && submenu.children && submenu.children.map((item, index) => (
                <SubMenuItem key={index} subMenuItem={item}/>
            ))}
        </Container>
    )
}