import React from "react";

import {MdAdd, MdOutlineFileDownload} from 'react-icons/md';

import {Container} from './style';

import Title from '../../components/Title';
import Breadcrumb from '../../components/Breadcrumb';

export default function PageHeader({title, breadItens}) {
    return(
        <Container>
            <div>
                <Title>{title}</Title>
                <Breadcrumb breadItens={breadItens}/>    
            </div>
            <div className="btn-area">
                <a className="add-btn" href="#">
                    <MdAdd size={18} color="#fff"/>
                    <span>Adicionar Conta</span>
                </a>
                <a className="export-btn" href="#">
                    <MdOutlineFileDownload size={18} color="#fff"/>
                    <span>Exportar</span>
                </a>
            </div>
        </Container>
    )
}