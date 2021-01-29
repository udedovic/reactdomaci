import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Meni() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "5px",
          backgroundColor:'#e6ffff'
        }}
      >
        <Button variant="primary">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </Button>{" "}
        <Button variant="primary">
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </Button>{" "}
      </ul>
    </div>
  );
}

export default Meni;
