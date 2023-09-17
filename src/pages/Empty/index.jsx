import React from "react";

import { Container } from './style';

import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

import Content from "../../components/Content";
import PageHeader from "../../components/PageHeader";

export default function Empty() {
    return(
        <Container>
            <Sidenav/>
            <Topbar/>

            <Content>
                <PageHeader/>
            </Content>
        </Container>
    )
}