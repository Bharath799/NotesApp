import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : "",
      description: props.description ? props.description : "",
      category: props.category ? props.category : "",
      categories: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3016/categories`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const categories = response.data;
        this.setState({ categories });
      });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category
    };
    console.log(this.state.category);
    console.log(formData);

    this.props.handleSubmit(formData);
  };
  handleSelect = e => {
    this.setState({ category: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="title" style={{ color: "red" }} >Title</label>
            <input
              class="form-control"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              id="name"

            />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="description" style={{ color: "red" }}>Description</label>
            <input
              class="form-control"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              id="name"
            />
            <br />
          </div>
          <div className="dropdown">
            <label htmlFor="category" style={{ color: "red" }}>Category</label> <br />

            <select onChange={this.handleSelect}>
              <option>select</option>
              {this.state.categories.map(cate => {
                return <option class="dropdown-item" value={cate._id}>{cate.name}</option>;
              })}
            </select>
          </div><br />
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}
export default Form;
