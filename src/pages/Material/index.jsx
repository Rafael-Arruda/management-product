import React, { useEffect, useState } from "react";

import { Container, DeviderHorizontal, ModalHeader, StyledTable, } from './style';

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

import TableHeader from "../../components/TableHeader";
import TableRow from "../../components/TableRow";

export default function Material() {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        return formattedDate;
    };

    const [isModalOpen, setModalOpen] = useState(false);
    const [materials, setMaterials] = useState([]);
    const [forMaterial, setFormMaterial] = useState({
        description: '',
    });

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        fetchMaterials();
      }, []);

    async function fetchMaterials() {
        try {
        const response = await api.get("/material");
        setMaterials(response.data);
        console.log("Lista de materiais:", response.data);
        } catch (error) {
        console.error("Erro ao buscar materiais:", error);
        }
    }

    async function materialAdd() {
        try {
            await api.post('/material', {
            des_material_mte: forMaterial.description
            });
            console.log("Material cadastrado:", forMaterial.description);
        } catch (error) {
            console.error('Erro ao cadastrar material', error);
            throw error;
        }
    }

   async function handleMaterialSubmit(e) {
        e.preventDefault();
        try {
            await materialAdd()
            await fetchMaterials()
            setFormMaterial({ description: '' })
            console.log("Material cadastrado:", forMaterial.description);
        } catch (error) {
            console.error('Erro ao cadastrar material', error)
        }
    };

    async function handleDeleteMaterial(material) {
        const userConfirmed = window.confirm(
            `Você realmente deseja excluir o material "${material.des_material_mte}"?`
          );
          if (userConfirmed) {
            if (material.is_ativo_mte === 0) {
              alert('Este material não pode ser excluído porque não está ativo.');
            } else {
              try {
                await api.delete(`/material/${material.id_material_mte}`);
                alert(`O material "${material.des_material_mte}" foi excluído com sucesso.`);
                fetchMaterials();
                console.log(handleDeleteMaterial())
              } catch (error) {
                console.error('Erro ao excluir material', error);
              }
            }
          }
    }

   return (
        <Container>
            <Sidenav />
            <Topbar />

            <Content>
                <PageHeader
                    onClick={() => openModal()}
                    titulo='Cadastro de Material'
                    adicionar='Cadastrar Material'
                    exportar='Exportar'
                    btnExport={() => {}}
                    breadItens={['Home', 'Cadastro de Material']}
                />

                {isModalOpen && (
                    <ModalContainer>
                        <ModalContent>
                            <ModalHeader>
                                <h2>Cadastrar Material</h2>
                                <button onClick={closeModal}>X</button>
                            </ModalHeader>
                            <DeviderHorizontal />
                            <div>
                                <MaterialForm>
                                    <span>Nome do Material:</span>
                                    <Input
                                        type="text"
                                        value={forMaterial.description}
                                        onChange={(e) =>
                                            setFormMaterial({ ...forMaterial, description: e.target.value })
                                          }
                                    />
                                </MaterialForm>
                            </div>
                            <DeviderHorizontal />
                            <ModalBotao>
                                <Button onClick={handleMaterialSubmit}>Cadastrar</Button>
                                <ButtonClose onClick={closeModal}>Fechar</ButtonClose>
                            </ModalBotao>
                        </ModalContent>
                    </ModalContainer>
                )}

                    <StyledTable>
                        <TableHeader/>
                        <tbody>
                            { materials
                                .filter((material) => material.is_ativo_mte === 1)
                                .map((material) => (
                                        <TableRow
                                            key={material.id_material_mte}
                                            material={material}
                                            onClickEditar={() => {} }
                                            onClickExluir={() => handleDeleteMaterial(material) }
                                        />
                                ))
                            }
                        </tbody>
                    </StyledTable>
            </Content>
        </Container>
    )
}