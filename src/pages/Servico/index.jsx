import { useEffect, useState, useContext } from "react";

import { PaginationContext } from "../../contexts/pagination";

import { Container } from './style';


import Sidenav from '../../components/Sidenav';
import Topbar from "../../components/Topbar";

import Content from "../../components/Content";
import PageHeader from "../../components/PageHeader";

import ServiceForm from "./serviceForm";
import ServiceTable from "./serviceTable";

export default function Service() {

    const [services, setServices] = useState([]);

    const {title, breadItens} = useContext(PaginationContext);

    const [serviceEdited, setServiceEdited] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);

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

    const handleEdit = (id_servico_ser) => {
        const edit = services.filter((reg) => reg.id_servico_ser == id_servico_ser)[0];
        setServiceEdited(edit)
        setModalIsOpen(true);
    }


    console.log('serviceEdited', serviceEdited)

    return (
        <Container>
            <Sidenav />
            <Topbar />

            <Content>
                <PageHeader
                    onClick={() => setModalIsOpen(true)}
                    titulo={title}
                    adicionar='Novo Serviço'
                    exportar='Exportar'
                    btnExport={() => { }}
                    breadItens={breadItens}
                />
                <ServiceTable data={services} handleEdit={handleEdit} />
                <ServiceForm service={serviceEdited} onClose={() => { setModalIsOpen(false) }} visible={modalIsOpen} />
            </Content>
        </Container>
    )
}