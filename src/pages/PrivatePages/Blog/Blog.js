import React, { Component } from "react";
// import DataUser from "../../../store/DataUser.json";

export const Blog = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <table className=" text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Action</th>
              <th></th>
            </tr>
            {/* {DataUser.map((user, i) => {
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
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Blog;
