import React, { Component } from "react";
import Data from "../../../store/Data.json";
import TableComponent from "../../../component/Table/TableComponent";

export default class App extends Component {
  state = {
    tittle: "table kelompok petani",
    users: [
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
  };

  render() {
    return (
      <div>
        <h1>Testing</h1>

        <TableComponent />
      </div>
    );
  }
}
