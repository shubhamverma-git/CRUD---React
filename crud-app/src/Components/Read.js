import React, { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://crudcrud.com/api/5cf2ba86a1934575b3a661e18dc71377/formData")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }

  useEffect(() => {
    getData();
    console.log("effect running");
  }, []);

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
        {data.map((eachData) => {
          {
            console.log(eachData);
          }
          return (
            <tbody>
              <tr>
                <th scope="row">{eachData?._id}</th>
                <td>{eachData?.name}</td>
                <td>{eachData?.email}</td>
                <td>{eachData?.phone}</td>
                <td>
                  <button className="btn btn-success">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Read;
