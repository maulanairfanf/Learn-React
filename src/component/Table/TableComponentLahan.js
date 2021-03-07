import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {
  Spinner,
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
import { deleteLahan } from "../../actions/lahanAction";

const handleClick = (dispatch, id, kategori) => {
  swal({
    title: "Apakah Anda yakin akan lahan dengan nama  : " + kategori,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteLahan(id));
      swal({
        title: "Berhasil Delete Lahan!",
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
    getLahanList: state.lahan.getLahanList,
    errorLahanList: state.lahan.errorLahanList,
  };
};

const TableComponentLahan = (props) => {
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
        value: props.getLahanList.length,
      },
    ],
  };
  const columns = [
    {
      dataField: "kategori",
      text: "Tanaman",
      sort: true,
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <div className="">
              <span>{row.kategori} </span>
              <br />
              <small className="text-secondary">
                Luas : {row.luas} / Usia Tanaman : {row.usia_tanaman}
              </small>
            </div>
          </>
        );
      },
    },
    {
      dataField: "petani",
      text: "Petani",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
    },
    {
      dataField: "desa",
      text: "Desa",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
      },
      formatter: (rowContent, row) => {
        return (
          <>
            <small>desa : {row.desa} </small>
            <small>kecamatan : {row.kecamatan} </small>
            <small>kabupaten : {row.kabupaten} </small>
            <small>provinsi : {row.provinsi} </small>
          </>
        );
      },
    },
    {
      dataField: "keterangan",
      text: "Keterangan",
      headerStyle: {
        backgroundColor: "#f3f2f7",
        border: "none",
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
                to={"detail-lahan/" + row.id}
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
                    to={"edit-lahan/" + row.id}
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
                    handleClick(props.dispatch, row.id, row.kategori)
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
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];
  return (
    <>
      {props.getLahanList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getLahanList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Link to="/create-lahan">
                <button type="button" className="btn btn-light rounded">
                  <span>
                    Tambah Lahan <UserPlus className="ml-2 mb-1" size={20} />
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
          {props.errorLahanList ? (
            <h2>{props.errorLahanList}</h2>
          ) : (
            <Spinner colors="dark" />
          )}
        </div>
      )}
    </>
  );
};

export default connect(mapStateToProps, null)(TableComponentLahan);
