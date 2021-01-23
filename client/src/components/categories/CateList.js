import React from "react";
import { connect } from "react-redux";
import { startRemoveCategory } from "../../actions/categoriesAction";

import { Link } from "react-router-dom";

function CateList(props) {
  const handleRemove = id => {
    const confirmRemove = window.confirm(id);
    if (confirmRemove) {
      props.dispatch(startRemoveCategory(id));
    }
  };


  return (
    <div >
      <center><br />
        <h1><span class='text-warning'>Listing Categories-{props.categories.length}</span></h1><br />
        <div className="card" style={{ width: "18rem" }}>
          <ul class="list-group">
            {props.categories.map(cate => {
              return (
                <li class="list-group-item" key={cate._id}>
                  <Link to={`/categories/${cate._id}`}>{cate.name}</Link>&nbsp;
             <div className="float-left"><Link className="btn btn-primary" href="#" role="button" to={`/categories/${cate._id}`}>show</Link></div>
                  <div className="float-right">
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        handleRemove(cate._id);
                      }}
                    >
                      remove
              </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div><br />
        <Link class="btn btn-primary" href="#" role="button" to="/categories/new">Add </Link>
      </center>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(CateList);
