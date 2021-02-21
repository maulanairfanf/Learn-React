import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deletePanen } from "../../actions/panenAction";

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin akan Panen dengan nama  : ",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deletePanen(id));
      swal({
        title: "Berhasil Delete Panen!",
        icon: "success",
        button: "Oke",
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
    getPanenList: state.panen.getPanenList,
    errorPanenList: state.panen.errorPanenList,
  };
};

const TableComponentPanen = (props) => {
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
      dataField: "varietas",
      text: "Panen",
      sort: true,
    },
    {
      dataField: "Action",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link className="text-white" to={"EditPanen/" + row.id}>
              <Button className="ml-3" color="primary">
                Update
              </Button>
            </Link>

            <Link className="text-white" to={"DetailPanenContainer/" + row.id}>
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
      {props.getPanenList ? (
        <ToolkitProvider
          bootstrap4
          className="bg-blue-500"
          keyField="id"
          data={props.getPanenList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Link to="/CreatePanen">
                <Button color="primary">AddPanen </Button>
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
          {props.errorPanenList ? (
            <h2>{props.errorPanenList}</h2>
          ) : (
            <Spinner colors="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponentPanen);
