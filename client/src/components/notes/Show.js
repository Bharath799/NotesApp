import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

function Show(props) {
  console.log("this is shiva", props);

  return (
    <div className="row">
      <div className="offset-md-5 col-md-7"><br />
        <h1><span class='text-warning'>Notes Show</span></h1><br />
        <p class='text-primary'>{props.notes && props.notes.title}</p>
        <p class='text-primary'>{props.notes && props.notes.description}</p>
        <p class='text-primary'>{props.cate && props.cate.name}</p>
        <Link class='text-warning' to={`/notes/edit/${props.match.params.id}`}>edit</Link> <br />
      </div>

    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes.find(note => note._id == props.match.params.id),
    cate: state.categories.find(cat => cat._id == (state.notes.find(note => note._id == props.match.params.id) &&
      state.notes.find(note => note._id == props.match.params.id).category._id))
  };
};

export default connect(mapStateToProps)(Show);

