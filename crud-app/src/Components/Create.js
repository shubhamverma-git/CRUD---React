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
    e.preventDefault();
    axios.post(
      "https://crudcrud.com/api/3838db2664cc4b8fb53b2fe8a2e3b28d/formData",
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
        <form className={classes.form}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              <h1>Full Name</h1>
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className={`form-control ${classes.input}`}
              id="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">
              <h1>Email</h1>
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control ${classes.input}`}
              id="userEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPhone" className="form-label">
              <h1>Contact Number</h1>
            </label>
            <input
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              className={`form-control ${classes.input}`}
              id="userPhone"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary mt-5 "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
