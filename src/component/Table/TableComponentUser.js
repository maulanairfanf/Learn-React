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
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteUser, getUsersList } from "../../actions/userAction";
import { MoreVertical, Edit, Trash, Eye, UserPlus, User } from "react-feather";
import Photo from "../../assets/user.png";
import Kirito from "../../assets/tester.jpg";

const handleClick = (dispatch, id, nama) => {
  swal({
    title: "Apakah Anda yakin akan menghapus user dengan nama : " + nama,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));

      swal({
        title: "Berhasil Delete User!",
        icon: "success",
        button: "Oke",
      });
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];
const { SearchBar } = Search;

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponentUser = (props) => {
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
        value: props.getUsersList.length,
      },
    ],
  };

  const columns = [
    {
      dataField: "nama",
      text: "Identitas",
      sort: true,
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <div className="d-flex align-items-center ">
              <div className="">
                {row.foto_profil ? (
                  <div style={{ width: "30px" }}>
                    <img
                      src={Kirito}
                      className="rounded-circle img-fluid border border-primary "
                    ></img>
                  </div>
                ) : (
                  <img
                    src={Photo}
                    style={{ width: "30px" }}
                    className="rounded-circle border border-primary"
                  ></img>
                )}
              </div>
              <div className="ml-2">
                <small>{row.nama}</small>
                <br />
                <small>{row.telp}</small>
              </div>
            </div>
          </>
        );
      },
    },
    {
      dataField: "pekerjaan",
      text: "Pekerjaan",

      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <h6>{row.pekerjaan}</h6>
          </>
        );
      },
    },
    {
      dataField: "gender",
      text: "Riwayat",

      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>{row.gender} - </small>

            <small>{row.pendidikan}</small>
          </>
        );
      },
    },
    {
      dataField: "provinsi",
      text: "Provinsi",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>Desa : {row.desa} , </small>
            <small>Kecamatan : {row.kecamatan} , </small>
            <small>Kabupaten : {row.kabupaten} , </small>
            <small>Provinsi : {row.provinsi} </small>
          </>
        );
      },
    },
    {
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <>
            <UncontrolledDropdown>
              <Link
                to={"DetailUserContainer/" + row.id}
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
                    to={"EditUser/" + row.id}
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
                  onClick={() => handleClick(props.dispatch, row.id, row.nama)}
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
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Link to="/CreateUser">
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
          {props.errorUsersList ? (
            <h2>{props.errorUsersList}</h2>
          ) : (
            <Spinner colors="dark" />
          )}
        </div>
      )}
    </>
  );
};

export default connect(mapStateToProps, null)(TableComponentUser);
