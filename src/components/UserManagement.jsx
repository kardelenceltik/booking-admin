import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyIcon from "@mui/icons-material/Key";
import Box from "@mui/material/Box";

import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from "axios";
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [mail, setMail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);

  const getUserListHandler = () => {
    axios.get("http://localhost:9292/user/get-all-users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUserListHandler();
  }, []);

  const createUserHandler = () => {
    axios
      .post("http://localhost:9292/user/create", {
        name,
        surname,
        mail,
        phone,
        password,
      })
      .then((response) => {
        alert("Eklendi");
      })
      .catch((error) => {
        alert(error.response.statusText);
      });
  };
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
        class="modal fade exampleModal mt-5"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create User Form
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="icon-input-group">
                    <AccountCircle sx={{ color: "action.active", mr: 1 }} />
                    <TextField
                      id="input-with-sx"
                      label="Name"
                      variant="standard"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="icon-input-group">
                    <AccountCircle sx={{ color: "action.active", mr: 1 }} />
                    <TextField
                      id="input-with-sx"
                      label="Surname"
                      variant="standard"
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                </Box>
              </div>
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="icon-input-group">
                    <EmailIcon sx={{ color: "action.active", mr: 1 }} />
                    <TextField
                      id="input-with-sx"
                      label="Mail"
                      variant="standard"
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </div>
                  <div className="icon-input-group">
                    <PhoneIcon sx={{ color: "action.active", mr: 1 }} />
                    <TextField
                      id="input-with-sx"
                      label="Phone"
                      variant="standard"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginLeft: 2.5,
                  }}
                >
                  <div className="icon-input-group pl-5">
                    <KeyIcon sx={{ color: "action.active", mr: 1 }} />
                    <TextField
                      id="input-with-sx"
                      label="Password"
                      variant="standard"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Box>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => createUserHandler()}
              >
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
