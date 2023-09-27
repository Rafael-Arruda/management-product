import React from "react";

import { Button } from './style';

import Table from "../../components/Table";
import { formatDate } from "../../utils/datehelper";

// eslint-disable-next-line react/prop-types
export default function ServiceTable({ data = [] }) {


  const columns = [
    {
      name: 'Ações',
      cell: ({ id_servico_ser }) => (
        <div>
          <Button onClick={() => console.log("editar", id_servico_ser)}>Editar</Button>
          <Button onClick={() => console.log("excluir", id_servico_ser)}>Excluir</Button>
        </div>
      ),
    },
    {
      name: "ID",
      selector: ({ id_servico_ser }) => `${id_servico_ser}`,
      sortable: true,
    },
    {
      name: "Descrição",
      selector: ({ des_servico_ser }) => `${des_servico_ser}`,
      sortable: true,
    },
    {
      name: "Observação",
      selector: ({ txt_servico_ser }) => `${txt_servico_ser}`,
      sortable: true,
    },
    {
      name: "Valor",
      selector: ({ vlr_servico_ser }) => `${vlr_servico_ser}`,
      sortable: true,
      cell: (row) => `R$ ${(0.111).toFixed(2)}`
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