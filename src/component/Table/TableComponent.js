import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import ModalUpdate from "../Modal/ModalUpdate";
import ModalDelete from "../Modal/ModalDelete";
import ModalCreate from "../Modal/ModalCreate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}
const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "Action",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button onClick={handleClick}>update</Button>
          <Button className="ml-3" color="primary">
            <Link className="text-white" to={"portofolio/" + row.id}>
              detail
            </Link>
          </Button>
          {/* <ModalUpdate onClick={console.log(row.id)} /> <ModalDelete /> */}
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const { SearchBar } = Search;
const TableComponent = (props) => {
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          className="bg-blue-500"
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <ModalCreate />
              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Search" />
              </div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h2>{props.errorUsersList}</h2>
          ) : (
            <Spinner colors="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
