import React from 'react';
import { Button } from './style';
import TableCellItem from '../TableCellItem';

const TableRow = ({ material, onClickEditar, onClickExluir }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
};

  return (
      <tr key={material.id_material_mte}>
        <TableCellItem>
          <Button onClick={onClickEditar}>Editar</Button>
          <Button onClick={onClickExluir}>Excluir</Button>
        </TableCellItem>
        <TableCellItem>{material.id_material_mte}</TableCellItem>
        <TableCellItem>{material.des_material_mte}</TableCellItem>
        <TableCellItem>{formatDate(material.created_at)}</TableCellItem>
      </tr>
  );
};

export default TableRow;
