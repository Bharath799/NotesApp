import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    console.log(formData); //we are sending user data to the server using post method
    axios
      .post("http://localhost:3016/register", formData)
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          //here we checking client side validation
          alert(response.data.message); //error present is messeage property
        } else {
          //   console.log("the code is in register", response);
          //   alert(response.data.errmsg);
          this.props.history.push("/login"); //redirecting into login page
        }
      })
      .catch(err => {
        alert(err);
      });
  };
  render() {
    //htmlFor used in inside label because we wrote input field outside the label
    return (
      <div>
        <h2>Register With Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              id="username"
            />{" "}
            <br />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
            />{" "}
            <br />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              id="password"
            />{" "}
            <br />
          </div>

          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
export default Register;
