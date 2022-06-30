import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <label>name:</label>
      <input onChange={(e) => setName(e.target.value)} />
      <label>surname:</label>
      <input onChange={(e) => setSurname(e.target.value)} />
      <label>mail:</label>
      <input onChange={(e) => setMail(e.target.value)} />
      <label>password:</label>
      <input onChange={(e) => setPassword(e.target.value)} />
      <label>phone:</label>
      <input onChange={(e) => setPhone(e.target.value)} />
      <button onClick={() => createUserHandler()}>enter</button>
    </div>
  );
};

export default UserCreateForm;
