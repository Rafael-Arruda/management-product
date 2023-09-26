import React, { useEffect, useState } from "react";

import {  Container } from './style';

import api from "../../services/api";

import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

import Content from "../../components/Content";
import PageHeader from "../../components/PageHeader";

import ModalPage from "../../components/ModalPage";
import DataTableMaterial from "../../components/DataTable";

export default function RegisterMaterial() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [materials, setMaterials] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [forMaterial, setFormMaterial] = useState({
        description: '',
        value: '',
        unit: ''
    });

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    //Chamada da API - Lista todos os materiais
    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await api.get("/material");
                setMaterials(response.data);
                console.log("Lista de materiais:", response.data);
            } catch (error) {
                console.error("Erro ao buscar materiais:", error);
            }
        };
        fetchMaterials();
    }, []);

    // Chamada da API - Lista todas as unidade de medidas
    useEffect(() => {
        async function fetchUnits() {
            try {
                const response = await api.get("/unidade");
                const units = response.data.map((unit) => ({
                    value: unit.id_unidade_und,
                    label: unit.des_reduz_unidade_und
                }));
                setOptions(units);
                console.log("Lista de unidades:", response.data)
            } catch (error) {
                console.error("Erro ao buscar unidades:", error);
            }
        }
        fetchUnits();
    }, []);

    //Cadastrar material
    async function handleMaterialSubmit(e) {
            e.preventDefault();
            try {
                await api.post('/material', {
                    id_unidade_mte: selectedUnit.value,
                    des_material_mte: forMaterial.description,
                    vlr_material_mte: forMaterial.value
                });
                const response = await api.get("/material");
                setMaterials(response.data);
                setFormMaterial({ description: '', value: '', unit: '' })
                setSelectedUnit(null)
                console.log("Material cadastrado:", forMaterial.description, forMaterial.value, forMaterial.unit);
            } catch (error) {
                console.error('Erro ao cadastrar material', error)
            }
    };
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

                    <ModalPage
                        titleModal='Cadastrar Material'
                        btnModalClose={closeModal}

                        descriptionTitle='Nome do Material: '
                        inputTypeDescription='text'
                        InputValueDescription={forMaterial.description}
                        onChangeInputDescription={(e) => setFormMaterial({ ...forMaterial, description: e.target.value })}

                        ValueTitle='Valor:'
                        inputTypeValue='number'
                        InputValueValue={forMaterial.value}
                        onChangeInputValue={(e) => setFormMaterial({...forMaterial, value: e.target.value })}

                        titleUnit='Unidade: '
                        options={options}
                        selectedUnit={selectedUnit}
                        onChangeUnit={(selectedValue) => setSelectedUnit(selectedValue)}
                        isSearchable={true}

                        onChangeInput={(e) => setFormMaterial({ ...forMaterial, description: e.target.value })}
                        titleButtonSubmit='Cadastrar'
                        onClickSubmit={handleMaterialSubmit}
                        titleButtonCloseModal='Fechar'
                        onClickCloseModal={closeModal}
                    />
                )}
                    <DataTableMaterial />
            </Content>
        </Container>
    )
}