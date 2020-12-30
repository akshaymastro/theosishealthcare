import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Admin from "./Admin";
function BlogContent(props) {
  return (
    <Admin>
      <div className="blog-content">
        <Button
          className="outline-btn float-right"
          variant="outline-success"
          onClick={() => props.history.push("/createblog")}
        >
          Add Blog
        </Button>
      </div>
    </Admin>
  );
}

export default withRouter(BlogContent);
