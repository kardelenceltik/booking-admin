import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const getUserListHandler = () => {
    axios.get("http://localhost:9292/user/get-all-users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUserListHandler();
  }, []);
  return (
    <div>
      <div className="user-management-add-button-area">
        <Button variant="outlined">Add</Button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user._id}</td>

                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.mail}</td>
                <td>{user.phone}</td>

                <td>
                  <Button variant="outlined">Update</Button>

                  <Button variant="outlined">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
