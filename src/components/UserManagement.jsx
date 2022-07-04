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
        <Button
          variant="outlined"
          data-bs-toggle="modal"
          data-bs-target=".exampleModal"
        >
          Add
        </Button>
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

      {/* <!-- Modal --> */}
      <div
        class="modal fade exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
