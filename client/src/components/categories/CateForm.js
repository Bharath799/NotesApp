import React from "react";

class CateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? props.name : ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    this.props.handleSubmit(formData);
    console.log(formData);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div class="form-group">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" style={{ color: "red" }}>Name</label>
            <input
              class="form-control"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              id="name"
            /><br />
            <input type="submit" className="btn btn-danger" />
          </form>
        </div>
      </div>
    );
  }
}
export default CateForm;
