import React, { useState } from "react";

import { Container, DeviderHorizontal, ModalHeader, StyledTable, TableCell, TableHeader } from './style';

import api from "../../services/api";

import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

import Content from "../../components/Content";
import PageHeader from "../../components/PageHeader";
import {
    Button,
    Input,
    MaterialForm,
    ModalBotao,
    ModalContainer,
    ModalContent,
    ButtonClose
} from "./style";

export default function Material() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState('');
    const [material, setMaterial] = useState('');
    const [id, setId] = useState()
    const [dataCadastro, SetDataCadastro] = useState()

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    function handleMaterialSubmit(e) {
        e.preventDefault();

        materialAdd()
        console.log('Material cadastrado:', material);
        setMaterial('')
    };

    async function materialAdd() {
        await api.post('/material', {
            des_material_mte: material
        })
    }


    return(
        <Container>
            <Sidenav/>
            <Topbar/>

            <Content>
                <PageHeader
                    onClick={ () => openModal() }
                    titulo='Cadastro de Material'
                    adicionar='Cadastrar Material'
                    exportar='Exportar'
                />

                {isModalOpen && (
                    <ModalContainer>
                        <ModalContent>
                            <ModalHeader>
                                <h2>Cadastrar Material</h2>
                                <button onClick={closeModal} >X</button>
                            </ModalHeader>
                            <DeviderHorizontal/>
                            <div>
                                <MaterialForm>
                                    <span>Nome do Material:</span>
                                    <Input
                                        type="text"
                                        value={material}
                                        onChange={(e) => setMaterial(e.target.value)}
                                    />
                                </MaterialForm>
                            </div>
                            <DeviderHorizontal/>
                            <ModalBotao>
                                <Button onClick={handleMaterialSubmit}>Cadastrar</Button>
                                <ButtonClose onClick={closeModal}>Fechar</ButtonClose>
                            </ModalBotao>
                        </ModalContent>
                    </ModalContainer>
                )}

                <div>
                    <StyledTable>
                        <thead>
                            <TableHeader>Ações</TableHeader>
                            <TableHeader>ID</TableHeader>
                            <TableHeader>Material</TableHeader>
                            <TableHeader>Data</TableHeader>
                        </thead>
                        <tbody>
                            <TableCell>
                            <Button>Editar</Button>
                            <Button>Excluir</Button>
                            </TableCell>
                            <TableCell>{id}</TableCell>
                            <TableCell>{material}</TableCell>
                            <TableCell>{dataCadastro}</TableCell>
                        </tbody>
                    </StyledTable>
                </div>
            </Content>
        </Container>
    )
}