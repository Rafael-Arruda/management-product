import React from "react";

import {MdAdd, MdOutlineFileDownload} from 'react-icons/md';

import {Container} from './style';

import Title from '../../components/Title';
import Breadcrumb from '../../components/Breadcrumb';

export default function PageHeader( {titulo, adicionar, exportar, onClick } ) {
    return(
        <Container>
            <div>
                <Title>{titulo}</Title>
                <Breadcrumb breadItens={['Home', 'Vazio']}/>
            </div>
            <div className="btn-area">
                <button className="add-btn" onClick={onClick}>
                    <MdAdd size={18} color="#fff"/>
                    <span>{adicionar}</span>
                </button>
                <button className="export-btn" >
                    <MdOutlineFileDownload size={18} color="#fff"/>
                    <span>{exportar}</span>
                </button>
            </div>
        </Container>
    )
}