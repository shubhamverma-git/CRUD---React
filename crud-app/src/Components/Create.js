import React, { useState } from "react";
import classes from "./Create.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    console.log("Warning");
    e.preventDefault();
    axios.post(
      "https://crudcrud.com/api/defb8ca6ebce4e8c9a4ec219951d7637/formData",
      {
        name: name,
        email: email,
        phone: phone,
      },
      header
    );

    history("/read");
  };
  return (
    <div className={classes.container}>
      <h1 className="bg-warning p-2">Register Here</h1>
      <div
        className={`d-flex justify-content-center mt-5 ${classes.form_container}`}
      >
        <form>
          <div className="mb-3">
            <label for="userName" className="form-label">
              <h1>Full Name</h1>
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="userName"
            />
          </div>
          <div className="mb-3">
            <label for="userEmail" className="form-label">
              <h1>Email</h1>
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="userEmail"
            />
          </div>
          <div className="mb-3">
            <label for="userPhone" className="form-label">
              <h1>Contact Number</h1>
            </label>
            <input
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="userPhone"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
