import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
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
import { deletePupuk } from "../../actions/pupukAction";

const handleClick = (dispatch, id, jenis_pupuk) => {
  swal({
    title: "Apakah Anda yakin akan pupuk dengan nama  : " + jenis_pupuk,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deletePupuk(id));
      swal({
        title: "Berhasil Delete Pupuk!",
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
    getPupukList: state.pupuk.getPupukList,
    errorPupukList: state.pupuk.errorPupukList,
  };
};

const TableComponentPupuk = (props) => {
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
        value: props.getPupukList.length,
      },
    ],
  };
  const columns = [
    {
      dataField: "petani",
      text: "Identitas",
      sort: true,
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>{row.petani}</small>
            <br />
            <small>{row.poktan}</small>
          </>
        );
      },
    },
    {
      dataField: "jenis_pupuk",
      text: "Jenis",
      sort: true,
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>Jenis : {row.jenis_pupuk}</small>
            <br />
            <small>Kapasitas : {row.kapasitas}</small>
          </>
        );
      },
    },
    {
      dataField: "tgl_distribusi",
      text: "Tanggal Distribusi",
      sort: true,
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
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
                to={"detail-pupuk/" + row.id}
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
                    to={"edit-pupuk/" + row.id}
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
                    handleClick(props.dispatch, row.id, row.jenis_pupuk)
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
  const data = props.getPupukList;
  console.log(data);
  return (
    <>
      {props.getPupukList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getPupukList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Link to="/create-pupuk">
                <button type="button" className="btn btn-light rounded">
                  <span>
                    Tambah Pupuk <UserPlus className="ml-2 mb-1" size={20} />
                  </span>
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
          {props.errorPupukList ? (
            <h2>{props.errorPupukList}</h2>
          ) : (
            <Spinner colors="dark" />
          )}
        </div>
      )}
    </>
  );
};

export default connect(mapStateToProps, null)(TableComponentPupuk);
