import React from "react";

export const Users = ({ users, deleteUser }) => {
  const userList = () =>
    users.map((user) => {
      return (
        <div
          key={user.id}
          className="border-indigo-600 px-10 py-3 mt-4 bg-white rounded-lg"
        >
          <h1
            onClick={() => {
              deleteUser(user.id);
            }}
            className="text-xl"
          >
            {user.username}
          </h1>
        </div>
      );
    });

  return (
    <div>
      <h1>{userList}</h1>
    </div>
  );
};

export default Users;
