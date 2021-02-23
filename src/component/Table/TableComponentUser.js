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
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteUser } from "../../actions/userAction";
import { MoreVertical, Edit, Trash, Eye, UserPlus } from "react-feather";

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

const TableComponentUser = (props) => {
  // const columns = [
  //   {
  //     dataField: "id",
  //     text: "ID",
  //     headerStyle: () => {
  //       return { width: "5%" };
  //     },
  //     sort: true,
  //   },
  //   {
  //     dataField: "nama",
  //     text: "Nama",
  //     sort: true,
  //   },
  //   {
  //     dataField: "Action",
  //     text: "Action",
  //     formatter: (rowContent, row) => {
  //       return (
  //         <div>
  //           <Link className="text-white" to={"EditUser/" + row.id}>
  //             <Button className="ml-3" color="primary">
  //               Update
  //             </Button>
  //           </Link>

  //           <Link className="text-white" to={"DetailUserContainer/" + row.id}>
  //             <Button className="ml-3" color="primary">
  //               Detail
  //             </Button>
  //           </Link>
  //           <Button
  //             className="ml-3"
  //             color="primary"
  //             onClick={() => handleClick(props.dispatch, row.id, row.nama)}
  //           >
  //             Delete
  //           </Button>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  console.log(props.getUsersList);
  const data = props.getUsersList;
  console.log(data);
  return (
    <>
      {props.getUsersList ? (
        <div>
          <Link to="/CreateUser" className=" text-decoration-none">
            <Button color="dark">
              <UserPlus className=" text-white" />
              <span className="ml-3">Add User</span>
            </Button>
          </Link>
          <div className="float-right">
            <SearchBar {...props.searchProps} placeholder="Search..." />
          </div>

          <Table responsive>
            <thead className="bg-secondary">
              <tr className="text-white">
                <th>ID</th>
                <th>Nama</th>
                {/* <th>Users</th> */}
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr>
                  <td>
                    <span className="align-middle font-weight-bold">
                      {user.id}
                    </span>
                  </td>
                  <td>{user.nama}</td>

                  <td>
                    {/* <Badge pill color="light-primary" className="mr-1"> */}
                    {user.kategori}
                    {/* </Badge> */}
                  </td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="icon-btn hide-arrow"
                        color="transparent"
                        size="sm"
                      >
                        <MoreVertical size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={(e) => e.preventDefault()}>
                          <Link
                            to={"EditUser/" + user.id}
                            className="text-decoration-none"
                          >
                            <Edit className=" text-black-50" size={15} />{" "}
                            <span className="align-middle text-dark">Edit</span>
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          onClick={() =>
                            handleClick(props.dispatch, user.id, user.nama)
                          }
                        >
                          <Trash className=" text-black-50" size={15} />{" "}
                          <span className="align-middle text-dark ">
                            Delete
                          </span>
                        </DropdownItem>
                        <DropdownItem>
                          <Link
                            to={"DetailUserContainer/" + user.id}
                            className="text-decoration-none"
                          >
                            <Eye className=" text-black-50" size={15} />{" "}
                            <span className="align-middle text-dark">
                              Detail
                            </span>
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
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
