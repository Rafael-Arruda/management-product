import React from "react";

import { Container } from './style';

import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

export default function Home() {
    return(
        <Container>
            <Sidenav/>
            <Topbar/>
        </Container>
    )
}