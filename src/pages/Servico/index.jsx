import { useContext, useEffect, useState } from "react";

import { PaginationContext } from "../../contexts/pagination";




import Content from "../../components/Content";
import PageHeader from "../../components/PageHeader";

import { getServices } from "../../services/service";
import { formatDate } from "../../utils/dateHelper";
import ServiceForm from "./serviceForm";
import ServiceTable from "./serviceTable";

export default function Service() {

    const [services, setServices] = useState([]);

    const { title, breadItens } = useContext(PaginationContext);

    const [serviceEdited, setServiceEdited] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Chamada da API - Lista todos os materiais
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getServices();
                setServices(response);
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

    return (
        <Content>
            <PageHeader
                onClick={() => {
                    setServiceEdited({});
                    setModalIsOpen(true)
                }}
                adicionar='Novo Serviço'
                exportar='Exportar'
                exportFilename='export_servico'
                dataset={services.map(reg=>({'ID':reg.id_servico_ser, 'Descrição': reg.des_servico_ser, 'Observação': reg.txt_servico_ser, 'Data Criação': formatDate(reg.created_at)}))}
            />
            <ServiceTable data={services} handleEdit={handleEdit} />
            {modalIsOpen && <ServiceForm service={serviceEdited} onClose={() => { setModalIsOpen(false) }} visible={modalIsOpen} />}
        </Content>
    )
}