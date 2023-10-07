import React from "react";

import { useNavigate } from "react-router-dom";
import Icon from "../Icons";
import { Container, MenuItem } from './style';

export default function SubMenuItem({subMenuItem}) {

    const navigate = useNavigate();
    return(
        <Container>
            <MenuItem onClick={()=>navigate(subMenuItem.path_menu_mnu)}>
                <Icon icon={subMenuItem.icon_menu_mnu} />
                <span>{subMenuItem.des_menu_mnu}</span>
            </MenuItem>
        </Container>
    )
}