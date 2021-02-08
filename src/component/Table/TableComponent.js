import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const product = [
    {
      id: 1,
      nama: "affif",
      alamat: "hi",
      umur: 23,
      nohp: "asdasdas",
    },
    {
      id: 2,
      nama: "affif",
      alamat: "hi",
      umur: 23,
      nohp: "asdasdas",
    },
    {
      id: 3,
      nama: "affif",
      alamat: "hi",
      umur: 23,
      nohp: "asdasdas",
    },
  ],
  columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "nama",
      text: "Nama",
    },
    {
      dataField: "alamat",
      text: "Price",
    },
  ];

const TableComponent = () => {
  return (
    <div>
      <BootstrapTable
        className="bg-blue-500"
        keyField="name"
        data={product}
        columns={columns}
      />
    </div>
  );
};

export default TableComponent;
