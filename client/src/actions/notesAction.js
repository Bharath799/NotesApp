import axios from "axios";

export const setNotes = notes => {
  return { type: "SET_NOTES", payload: notes };
};
export const removeNotes = remove => {
  return { type: "REMOVE_NOTES", payload: remove };
};
export const showNotes = show => {
  return { type: "SHOW_NOTES", payload: show };
};

export const editNotes = edit => {
  return { type: "EDIT_NOTES", payload: edit };
};

export const addNote = note => {
  return { type: "ADD_NOTE", payload: note }
}

export const startGetNotes = () => {
  return dispatch => {
    axios
      .get("http://localhost:3016/notes", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const notes = response.data;

        dispatch(setNotes(notes));
      });
  };
};

export const startRemoveNotes = id => {
  console.log(id);
  return dispatch => {
    axios
      .delete(`http://localhost:3016/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const remove = response.data;
        console.log(remove);
        dispatch(removeNotes(remove));
      });
  };
};

export const startShowNotes = id => {
  return dispatch => {
    axios
      .get(`http://localhost:3016/notes${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const show = response.data;

        dispatch(showNotes(show));
      });
  };
};

export const startEditNotes = id => {
  return dispatch => {
    axios
      .get(`http://localhost:3016/notes${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const edit = response.data;

        dispatch(editNotes(edit));
      });
  };
};


export const startAddNote = (note, redirect) => {
  return dispatch => {
    axios.post("http://localhost:3016/notes", note, {
      headers: {
        "x-auth": localStorage.getItem("authToken")
      }
    })
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          const note = response.data
          dispatch(addNote(note))
          redirect()

        }
      });
  }
}