import React from "react";


import { Container } from './style';

import ButtonAdd from "../ButtonAdd";

export default function PageHeader({ adicionar, exportar, onClick, btnExport }) {
    return (
        <Container>
            <ButtonAdd
                adicionar={adicionar}
                exportar={exportar}
                onClick={onClick}
                btnExport={btnExport}
            />
        </Container>
    )
}