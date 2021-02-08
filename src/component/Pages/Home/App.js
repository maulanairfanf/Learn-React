import React, { Component } from "react";
import Users from "./Items";
import Data from "../../../store/Data.json";
// import Addform from "./Addform";
class App extends Component {
  state = {
    user: Data,
  };
  deleteUser = (id) => {
    console.log(id);
    const user = this.state.user.filter((user) => {
      return user.id !== id;
    });

    this.setState({
      user,
    });
  };


  render() {
    return (
      <div className="App">
        <table
          className=" text-md bg-white shadow-md rounded mb-4"
          user={this.state.user}
          deleteItem={this.deleteUser}
        >
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Action</th>
              <th></th>
            </tr>
            {Data.map((user, i) => {
              return (
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">{user.username}</td>
                  <td className="p-3 px-5">{user.email}</td>

                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      // items={this.state.user}
                      // deleteItem={this.deleteUser}
                      type="button"
                      onClick={() => {
                        this.deleteUser(user.id);
                      }}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Users user={this.state.user} deleteItem={this.deleteUser} />
        {/* <Addform addItem={this.addItem} /> */}
      </div>
    );
  }
}

export default App;
