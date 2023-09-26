import { useEffect, useState } from "react";

import { Container } from './style';


import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

import Content from "../../components/Content";
import PageHeader from "../../components/PageHeader";

import ServiceTable from "./serviceTable";

export default function Service() {

    const [services, setServices] = useState([]);



    // Chamada da API - Lista todos os materiais
    useEffect(() => {
        const fetchServices = async () => {
            try {
                // const response = await api.get("/service");
                setServices([1,2,3,4]);
                // console.log("Lista:", response.data);
            } catch (error) {
                console.error("Erro ao buscar:", error);
            }
        };
        fetchServices();
    }, []);


   return (
        <Container>
            <Sidenav />
            <Topbar />

            <Content>
                <PageHeader
                    onClick={() => console.log('modal')}
                    titulo='Serviço'
                    adicionar='Novo Serviço'
                    exportar='Exportar'
                    btnExport={() => {}}
                    breadItens={['Serviço']}
                />
                    <ServiceTable data={services} />
            </Content>
        </Container>
    )
}