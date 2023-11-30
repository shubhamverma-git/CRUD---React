import React from "react";

function CssPosition() {
  return (
    <div
      className="d-flex gap-5"
      style={{
        border: "2px solid black",
        backgroundColor: "khaki",
        padding: "40px",
        height: "1500px",
      }}
    >
      <div
        className=" bg-dark"
        style={{ width: "200px", height: "200px", color: "white" }}
      >
        1
      </div>
      <div
        className="bg-danger"
        style={{
          width: "200px",
          height: "200px",
          color: "white",
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
      >
        2
      </div>
      <div
        className="bg-primary"
        style={{
          width: "200px",
          height: "200px",
          color: "white",
          position: "sticky",
          top: "30px",
        }}
      >
        3
      </div>
      <div
        className="bg-warning"
        style={{ width: "200px", height: "200px", color: "white" }}
      >
        4
      </div>
    </div>
  );
}

export default CssPosition;
