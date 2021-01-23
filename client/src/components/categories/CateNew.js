import React from "react";
import CateForm from "./CateForm";
import axios from "axios";

class CateNew extends React.Component {
  handleSubmit = FormData => {
    axios
      .post("http://localhost:3016/categories", FormData, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          this.props.history.push("/categories");
        }
      });
  };
  render() {
    return (
      <div>
        <h1><span className="text-warning">Add Categories</span></h1>
        <CateForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default CateNew;
