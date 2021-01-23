import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

function CateShow(props) {
  console.log(props.match);
  console.log("this is shiva", props.category);

  return (
    <div className="row">
      <div className="offset-md-5 col-md-7">
        <h1><span class='text-warning'>Category Show</span></h1>
        <p class='text-primary'>{props.category && props.category.name}</p>
        <Link class='text-warning' to={`/categories/edit/${props.match.params.id}`}>edit</Link> <br />
      </div>


    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    category: state.categories.find(cate => cate._id == props.match.params.id)
  };
};

export default connect(mapStateToProps)(CateShow);
