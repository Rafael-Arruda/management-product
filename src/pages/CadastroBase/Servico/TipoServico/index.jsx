import { useEffect, useState } from "react";





import Content from "../../../../components/Content";
import PageHeader from "../../../../components/PageHeader";

import { getServiceType } from "../../../../services/serviceType";
import { formatDate } from "../../../../utils/dateHelper";
import TipoServiceForm from "./tipoServiceForm";
import TipoServicoTable from "./tipoServicoTable";

export default function TipoServico() {

    const [regs, setRegs] = useState([]);

    const [regEdited, setRegEdited] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Chamada da API - Lista todos os materiais
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getServiceType();
                setRegs(response);
            } catch (error) {
                console.error("Erro ao buscar:", error);
            }
        };
        fetchServices();
    }, []);

    const handleEdit = (id_servico_tipo_stp) => {
        const edit = regs.filter((reg) => reg.id_servico_tipo_stp == id_servico_tipo_stp)[0];
        setRegEdited(edit)
        setModalIsOpen(true);
    }


    return (
        <Content>
            <PageHeader
                onClick={() => {
                    setRegEdited({});
                    setModalIsOpen(true)
                }}
                adicionar='Novo Tipo de Serviço'
                exportar='Exportar'
                exportFilename='export_tipo_servico'
                dataset={regs.map(reg=>({'ID':reg.id_servico_tipo_stp, 'Nome': reg.des_servico_tipo_stp, 'Valor': reg.val_servico_tipo_stp, 'Data Criação': formatDate(reg.created_at)}))}
            />
            <TipoServicoTable data={regs} handleEdit={handleEdit} />
            {modalIsOpen && <TipoServiceForm service={regEdited} onClose={() => { setModalIsOpen(false) }} visible={modalIsOpen} />}
        </Content>
    )
}