import React from "react";
import { connect } from "react-redux";
import CateForm from "./CateForm";

import axios from "axios";

class CateEdit extends React.Component {
  handleSubmit = FormData => {
    axios
      .put(
        `http://localhost:3016/categories/${this.props.match.params.id}`,
        FormData,
        {
          headers: {
            "x-auth": localStorage.getItem("authToken")
          }
        }
      )
      .then(response => {
        const categories = response.data;
        this.props.history.push(`/categories/${categories._id}`);
      });
  };
  render() {
    console.log("this is naveen", this.props.categories);

    return (
      <div>
        <h2><span class='text-warning'>Edit Category</span></h2>
        {Object.keys(this.props.cate).length !== 0 && (
          <CateForm {...this.props.cate} handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cate: state.categories.find(cate => cate._id == props.match.params.id)
  };
};

export default connect(mapStateToProps)(CateEdit);
