import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Seo";

const NotFound = () => {
  return (
    <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
      <Seo
        title="Page not found | Exclusive Calls"
        description="This page does not exist."
        path="/"
        robots="noindex, follow"
      />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </div>
  );
};

export default NotFound;