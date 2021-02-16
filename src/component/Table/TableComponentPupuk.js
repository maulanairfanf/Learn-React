import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deletePupuk } from "../../actions/pupukAction";

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin akan pupuk dengan nama  : ",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deletePupuk(id));
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
    getPupukList: state.pupuk.getPupukList,
    errorPupukList: state.pupuk.errorPupukList,
  };
};

const TableComponentPupuk = (props) => {
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
      dataField: "jenis_pupuk",
      text: "Jenis",
      sort: true,
    },
    {
      dataField: "Action",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link className="text-white" to={"EditPupuk/" + row.id}>
              <Button className="ml-3" color="primary">
                Update
              </Button>
            </Link>

            <Link className="text-white" to={"DetailPupukContainer/" + row.id}>
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
      {props.getPupukList ? (
        <ToolkitProvider
          bootstrap4
          className="bg-blue-500"
          keyField="id"
          data={props.getPupukList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Link to="/CreatePupuk">
                <Button color="primary">AddPupuk </Button>
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
          {props.errorPupukList ? (
            <h2>{props.errorPupukList}</h2>
          ) : (
            <Spinner colors="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponentPupuk);
