import { useEffect, useState } from "react";





import Content from "../../../../components/Content";
import PageHeader from "../../../../components/PageHeader";

import { getUnidade } from "../../../../services/unidade";
import { formatDate } from "../../../../utils/dateHelper";
import UnidadeForm from "./unidadeForm";
import UnidadeTable from "./unidadeTable";

export default function Unidade() {

    const [regs, setRegs] = useState([]);

    const [regEdited, setRegEdited] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Chamada da API - Lista todos os materiais
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await getUnidade();
                setRegs(response);
            } catch (error) {
                console.error("Erro ao buscar:", error);
            }
        };
        fetchServices();
    }, []);

    const handleEdit = (id_unidade_und) => {
        const edit = regs.filter((reg) => reg.id_unidade_und == id_unidade_und)[0];
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
                adicionar='Novo'
                exportar='Exportar'
                exportFilename='export_unidade'
                dataset={regs.map(reg=>({'ID':reg.id_unidade_und, 'Descrição': reg.des_unidade_und, 'Descrição Reduzida': reg.des_reduz_unidade_und, 'Data Criação': formatDate(reg.created_at)}))}
            />
            <UnidadeTable data={regs} handleEdit={handleEdit} />
            {modalIsOpen && <UnidadeForm reg={regEdited} onClose={() => { setModalIsOpen(false) }} visible={modalIsOpen} />}
        </Content>
    )
}