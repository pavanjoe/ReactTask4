import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./UserTable.css"

function UserTable() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        setUserData(res.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <center>
        <h1>Dummy Data</h1>
        <table className="userTable">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt="Profile Pic" width="50" height="50" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UserTable;
