import React,{ useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import api from "../../services/api";
import { Button } from "../ModalPage/style";


export default function DataTableMaterial() {
  const [materials, setMaterials] = useState([]);
  const [filterText, setFilterText] = useState('')

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };

  const columns = [
    {
      name: 'Ações',
      cell: (row) => (
      <div>
        <Button onClick={() => {handleEditMaterial(row)}}>Editar</Button>
        <Button onClick={() => handleDeleteMaterial(row)}>Excluir</Button>
      </div>
     ),
    },
    {
      name: "ID",
      selector:  (row) => `${row.id_material_mte}`,
      sortable: true,
    },
    {
      name: "Descrição",
      selector: (row) => `${row.des_material_mte}`,
      sortable: true,
    },
    {
      name: "Valor",
      selector: (row) => `${row.vlr_material_mte}`,
      sortable: true,
      cell: (row) => `R$ ${row.vlr_material_mte.toFixed(2)}`
    },
    {
      name: "Unidade",
      selector: (row) => `${row.des_reduz_unidade_und}`,
      sortable: true,
    },
    {
      name: "Data de Cadastro",
      selector: (row) => `${row.created_at}`,
      sortable: true,
      format: (row) => formatDate(row.created_at),
    },
  ];

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

  async function handleDeleteMaterial(material) {
    const userConfirmed = window.confirm(
        `Você realmente deseja excluir o material "${material.des_material_mte}"?`
      );
      if (userConfirmed) {
        if (material.is_ativo_mte === 0) {
          alert('Este material não pode ser excluído porque não está ativo.');
        } else {
          try {
            await api.delete(`/material/${material.id_material_mte}`);
            alert(`O material "${material.des_material_mte}" foi excluído com sucesso.`);
            setMaterials();
            console.log(handleDeleteMaterial())
          } catch (error) {
            console.error('Erro ao excluir material', error);
          }
        }
      }
  }
  const listMateriais = materials.filter(item => item.des_material_mte && item.des_material_mte.toLowerCase().includes(filterText.toLowerCase()))
  return (
    <>
      <input type="text" onChange={(e) => {setFilterText(e.target.value)} } ></input>
      <DataTable
      columns={columns}
      data={listMateriais.filter((material) => material.is_ativo_mte === 1)}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 30]}
      searchable
      sortable
      />
    </>
  )
}
