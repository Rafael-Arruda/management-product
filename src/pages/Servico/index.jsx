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
                setServices([
                    {
                        id_servico_ser: 1,
                        des_servico_ser: 'teste 1',
                        txt_servico_ser: 'obs do servico',
                        vlr_servico_ser: 12.50,
                        created_at: '2023-09-28 20:50'
                    },
                    {
                        id_servico_ser: 2,
                        des_servico_ser: 'teste 2',
                        txt_servico_ser: 'obs do servico2',
                        vlr_servico_ser: 11.50,
                        created_at: '2023-09-28 21:50'
                    }
                ]);
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
                    btnExport={() => { }}
                    breadItens={['Serviço']}
                />
                <ServiceTable data={services} />
            </Content>
        </Container>
    )
}