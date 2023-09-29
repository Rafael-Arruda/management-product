import React from "react";

import { Container, MenuItem } from './style';

export default function SubMenuItem({subMenuItem}) {
    return(
        <Container>
            <MenuItem>
                <span>{subMenuItem.des_menu_mnu}</span>
            </MenuItem>
        </Container>
    )
}