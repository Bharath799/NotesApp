import React from "react";
import Form from "./Form";
import axios from "axios";
import { connect } from 'react-redux'
import { startAddNote } from '../../actions/notesAction'

class New extends React.Component {
  handleSubmit = note => {
    // axios
    //   .post("http://localhost:3016/notes", FormData, {
    //     headers: {
    //       "x-auth": localStorage.getItem("authToken")
    //     }
    //   })
    //   .then(response => {
    //     if (response.data.hasOwnProperty("errors")) {
    //       alert(response.data.message);
    //     } else {
    //       this.props.history.push("/notes");
    //     }
    //   });
    const redirect = () => this.props.history.push("/notes");
    this.props.dispatch(startAddNote(note, redirect))
  };
  render() {
    return (
      <div><br />
        <h1><span class='text-warning'>Add Notes</span></h1>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default connect()(New);
