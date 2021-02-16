import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteUser } from "../../actions/userAction";

const handleClick = (dispatch, id, nama) => {
  swal({
    title: "Apakah Anda yakin akan menghapus user dengan nama : " + nama,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));

      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    }
  });
};

//buat sorted
const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

//buat search
const { SearchBar } = Search;

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
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
            <Link className="text-white" to={"EditUser/" + row.id}>
              <Button className="ml-3" color="primary">
                Update
              </Button>
            </Link>

            <Link className="text-white" to={"detail/" + row.id}>
              <Button className="ml-3" color="primary">
                Detail
              </Button>
            </Link>
            <Button
              className="ml-3"
              color="primary"
              onClick={() => handleClick(props.dispatch, row.id, row.nama)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

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
              <Link to="/CreateUser">
                <Button color="primary">CreateUser </Button>
              </Link>

              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Search..." />
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
