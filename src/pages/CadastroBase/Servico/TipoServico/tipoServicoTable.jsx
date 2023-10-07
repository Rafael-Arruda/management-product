import React from "react";

import Table from "../../../../components/Table";
import { deleteServiceType } from "../../../../services/serviceType";
import { formatDate } from "../../../../utils/dateHelper";
import { Button } from './style';


// eslint-disable-next-line react/prop-types
export default function TipoServiceTable({ data = [], handleEdit }) {

  const handleDelete = async (id) => {
    await deleteServiceType(id);
  }

  const columns = [
    {
      name: 'Ações',
      cell: ({ id_servico_tipo_stp }) => (
        <div>
          <Button onClick={() => handleEdit(id_servico_tipo_stp)}>Editar</Button>
          <Button onClick={() => handleDelete(id_servico_tipo_stp)}>Excluir</Button>
        </div>
      ),
    },
    {
      name: "ID",
      selector: ({ id_servico_tipo_stp }) => `${id_servico_tipo_stp}`,
      sortable: true,
    },
    {
      name: "Descrição",
      selector: ({ des_servico_tipo_stp }) => `${des_servico_tipo_stp}`,
      sortable: true,
    },
    {
      name: "Valor",
      selector: ({ val_servico_tipo_stp }) => `${val_servico_tipo_stp}`,
      sortable: true,
      cell: (row) => (`R$ ${parseFloat(row.val_servico_tipo_stp).toFixed(2)}`)
    },
    {
      name: "Data de Cadastro",
      selector: ({ created_at }) => `${created_at}`,
      sortable: true,
      format: ({ created_at }) => formatDate(created_at),
    },
  ];
  return (
    <Table
      columns={columns}
      data={data}
    />
  )
}