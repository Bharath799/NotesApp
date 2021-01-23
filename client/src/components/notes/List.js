import React from "react";
import { connect } from "react-redux";
import { startRemoveNotes } from "../../actions/notesAction";

import { Link } from "react-router-dom";
import CateNew from "../categories/CateNew";

function List(props) {
  const handleRemove = id => {
    const confirmRemove = window.confirm(id);
    if (confirmRemove) {
      props.dispatch(startRemoveNotes(id));
    }
  };
  return (
    <div >
      <center><br />
        <h1><span class='text-warning'>Listing Notes-{props.notes.length}</span></h1><br />
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {props.notes.map(note => {
              return (
                <li class="list-group-item" key={note && note._id}>&nbsp;
              <Link to={`/notes/${note && note._id}`}>{note && note.title}</Link>&nbsp;
             <div className="float-left"><Link className="btn btn-primary" href="#" role="button" to={`/notes/${note && note._id}`}>show</Link>&nbsp;</div>
                  <div className="float-right">
                    <button

                      className="btn btn-danger"
                      onClick={() => {
                        handleRemove(note && note._id);
                      }}
                    >
                      remove
              </button></div>
                </li>
              );
            })}
          </ul>
        </div><br />
        <Link class="btn btn-primary" href="#" role="button" to="/notes/new">Add </Link>

      </center>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(List);
