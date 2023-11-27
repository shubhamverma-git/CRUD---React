import React, { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);

  function getAllData() {
    axios
      .get("https://crudcrud.com/api/defb8ca6ebce4e8c9a4ec219951d7637/formData")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getAllData();
  }, [data]);

  getAllData();
  return (
    <>
      <h1 className="bg-warning p-2">All Registrations</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">email</th>
            <th scope="col">Mobile</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-success">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Read;
