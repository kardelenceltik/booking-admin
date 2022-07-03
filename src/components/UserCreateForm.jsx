import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
const UserCreateForm = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const createUserHandler = () => {
    axios
      .post("http://localhost:9292/user/create", {
        name,
        surname,
        mail,
        password,
        phone,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="user-create-form-container">
      <div className="card user-create-form-card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body ">
          <div className="form-group m-3">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              size="small"
            />
          </div>
          <div className="form-group m-3">
            <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              onChange={(e) => setSurname(e.target.value)}
              size="small"
            />
          </div>
          <div className="form-group m-3">
            <TextField
              id="outlined-basic"
              label="Mail"
              variant="outlined"
              onChange={(e) => setMail(e.target.value)}
              size="small"
            />
          </div>
          <div className="form-group m-3">
            <TextField
              id="outlined-basic "
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              size="small"
            />
          </div>

          <div className="form-group m-3">
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              onChange={(e) => setPhone(e.target.value)}
              size="small"
            />
          </div>
          <div className="form-group m-3">
            <Fade in="true">
              <Tooltip title="Click for save changes" placement="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => createUserHandler()}
                  size="small"
                >
                  Save
                </Button>
              </Tooltip>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreateForm;
