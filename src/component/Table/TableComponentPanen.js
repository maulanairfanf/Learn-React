import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
  Container,
  Button,
  Spinner,
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { MoreVertical, Edit, Trash, Eye, UserPlus } from "react-feather";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deletePanen } from "../../actions/panenAction";

const handleClick = (dispatch, id, varietas) => {
  swal({
    title: "Apakah Anda yakin akan Panen dengan nama  : " + varietas,
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
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );
  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    alwaysShowAllBtns: true,
    withFirstAndLast: false,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: props.getPanenList.length,
      },
    ],
  };
  const columns = [
    {
      dataField: "petani",
      text: "Petani",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Keterangan",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>{row.alamat}</small>
            <small>{row.luas}</small>
          </>
        );
      },
    },
    {
      dataField: "kategori",
      text: "Kategori",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>{row.kategori}</small>
            <small>{row.varietas}</small>
          </>
        );
      },
    },
    {
      dataField: "totalpanen",
      text: "Panen",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>{row.totalpanen}</small>
          </>
        );
      },
    },
    {
      dataField: "tgl_tanam",
      text: "Tanggal",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>{row.tgl_tanam} / </small> <small>{row.tgl_panen}</small>
          </>
        );
      },
    },
    {
      dataField: "Action",
      text: "Action",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <UncontrolledDropdown>
              <Link
                to={"DetailPanenContainer/" + row.id}
                className="text-decoration-none "
              >
                <Eye className=" text-black-50" size={15} />
              </Link>
              <DropdownToggle
                className="ml-1"
                color="transparent"
                size="sm"
                outline
              >
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={(e) => e.preventDefault()}>
                  <Link
                    to={"EditPanen/" + row.id}
                    className="text-decoration-none "
                  >
                    <h6>
                      <span>
                        <Edit className=" text-black-50 mr-1" size={15} />
                      </span>
                      <span className="align-middle text-black-50 mb-2">
                        Edit
                      </span>
                    </h6>
                  </Link>
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handleClick(props.dispatch, row.id, row.varietas)
                  }
                >
                  <h6>
                    <span>
                      <Trash className="mr-1 text-black-50" size={15} />
                    </span>
                    <span className="align-middle text-black-50 mb-2">
                      Delete
                    </span>
                  </h6>
                </DropdownItem>
              </DropdownMenu>{" "}
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];

  return (
    <>
      {props.getPanenList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getPanenList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Link to="/CreatePanen">
                <button type="button" className="btn btn-light rounded">
                  <UserPlus size={20} />
                </button>
              </Link>

              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Search..." />
              </div>
              <div className="table-responsive-lg">
                <BootstrapTable
                  bordered={false}
                  {...props.baseProps}
                  pagination={paginationFactory(options)}
                />
              </div>
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
    </>
  );
};

export default connect(mapStateToProps, null)(TableComponentPanen);
