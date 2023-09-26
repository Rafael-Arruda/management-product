import React from "react";

import { Button } from './style';

import DataTable from "react-data-table-component";
import { formatDate } from "../../utils/datehelper";

export default function ServiceTable({ data = [] }) {



  const columns = [
    {
      name: 'Ações',
      cell: (row) => (
        <div>
          <Button onClick={() => console.log("editar")}>Editar</Button>
          <Button onClick={() => console.log("excluir")}>Excluir</Button>
        </div>
      ),
    },
    {
      name: "ID",
      selector: (row) => `${'row.id_material_mte'}`,
      sortable: true,
    },
    {
      name: "Descrição",
      selector: (row) => `${'row.des_material_mte'}`,
      sortable: true,
    },
    {
      name: "Valor",
      selector: (row) => `${'row.vlr_material_mte'}`,
      sortable: true,
      cell: (row) => `R$ ${(0.111).toFixed(2)}`
    },
    {
      name: "Data de Cadastro",
      selector: (row) => `${'row.created_at'}`,
      sortable: true,
      format: (row) => formatDate('row.created_at'),
    },
  ];
  return (

    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 30]}
      searchable
      sortable
    />
  )
}