import React from "react";

import { Container } from './style';

import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

import Content from "../../components/Content";

export default function Home() {
    return(
        <Container>
            <Sidenav/>
            <Topbar/>

            <Content>
                conteúdo da página
            </Content>    
        </Container>
    )
}