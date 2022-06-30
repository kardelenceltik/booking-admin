import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const getUsersHandler = () => {
    axios.get("http://localhost:9292/user/get-all-users").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(() => {
    getUsersHandler();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <p key={user._id}>
            {user.name} || {user.surname} || {user.phone} || {user.password} ||{" "}
            {user.mail}
          </p>
        );
      })}
    </div>
  );
};

export default UserList;
