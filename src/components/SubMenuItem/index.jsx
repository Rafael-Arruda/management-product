import React from "react";

import Icon from "../Icons";
import { Container, MenuItem, Space4 } from './style';

export default function SubMenuItem({subMenuItem}) {
    return(
        <Container>
            <MenuItem>
                <Icon icon={subMenuItem.icon_menu_mnu} /><Space4/>
                <span>{subMenuItem.des_menu_mnu}</span>
            </MenuItem>
        </Container>
    )
}