import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

import axios from "axios";

class Edit extends React.Component {
  handleSubmit = FormData => {
    axios
      .put(
        `http://localhost:3016/notes/${this.props.match.params.id}`,
        FormData,
        {
          headers: {
            "x-auth": localStorage.getItem("authToken")
          }
        }
      )
      .then(response => {
        const notes = response.data;
        this.props.history.push(`/notes/${notes._id}`);
      });
  };
  render() {
    console.log("this is naveen", this.props.notes);
    return (
      <div><br />
        <h2><span class='text-warning'>Edit Notes</span></h2><br />
        {Object.keys(this.props.note).length !== 0 && (
          <Form {...this.props.note} handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find(note => note._id == props.match.params.id)
  };
};

export default connect(mapStateToProps)(Edit);
