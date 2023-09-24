import React from 'react';
import TableHeaderItem from '../TableHeaderItem';

const TableHeader = () => {
  return (
    <thead>
        <TableHeaderItem text='Ações' />
        <TableHeaderItem text='ID'/>
        <TableHeaderItem text='Material'/>
        <TableHeaderItem text='Data Cadastrada'/>
    </thead>
  );
};
export default TableHeader;
