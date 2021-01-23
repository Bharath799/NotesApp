import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
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
      //used for sending a HTML forms with additonal input feilds
      email: this.state.email,
      password: this.state.password
    };
    console.log(formData);
    axios
      .post("http://localhost:3016/login", formData)
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          //after successfull validation server gives us token and we are storing into our localstorage
          const authToken = response.data.token;
          localStorage.setItem("authToken", authToken); //storing the data into 'authToken' variable
          this.props.history.push("/"); //the link is taking into home page
          window.location.reload();
        }
      })
      .catch(err => {
        alert(err);
      });
  };
  render() {
    return (
      <div className="container">
        <h2><span className="text-primary">Login</span> </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="text-primary">Email</label>
            <input
              className="form-control"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
            />{" "}
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-primary">Password</label>
            <input
              className="form-control"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              id="password"
            />{" "}
            <br />
          </div>{" "}
          <br />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
