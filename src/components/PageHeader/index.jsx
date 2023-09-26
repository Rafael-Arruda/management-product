import React from "react";

import {MdAdd, MdOutlineFileDownload} from 'react-icons/md';

import {Container} from './style';

import Title from '../../components/Title';
import Breadcrumb from '../../components/Breadcrumb';
import ButtonAdd from "../ButtonAdd";

export default function PageHeader( {titulo, adicionar, exportar, onClick, breadItens, btnExport } ) {
    return(
        <Container>
            <div>
                <Title>{titulo}</Title>
                <Breadcrumb breadItens={breadItens}/>
            </div>

            <ButtonAdd
                adicionar={adicionar}
                exportar={exportar}
                onClick={onClick}
                btnExport={btnExport}
            />

        </Container>
    )
}