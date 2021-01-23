import axios from "axios";

export const setCategory = categories => {
  return { type: "SET_CATEGORY", payload: categories };
};

export const showCategory = show => {
  return { type: "SHOW_CATEGORY", payload: show };
};

export const editCategory = edit => {
  return { type: "EDIT_CATEGORY", payload: edit };
};

export const removeCategory = remove => {
  return { type: "REMOVE_CATEGORY", payload: remove };
};
export const startGetCategory = () => {
  return dispatch => {
    axios
      .get(`http://localhost:3016/categories`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const categories = response.data;
        // console.log("this de", categories);

        dispatch(setCategory(categories));
      });
  };
};

export const startShowCategory = id => {
  return dispatch => {
    axios
      .get(`http://localhost:3016/categories${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const show = response.data;

        dispatch(showCategory(show));
      });
  };
};

export const startEditCategory = id => {
  return dispatch => {
    axios
      .get(`http://localhost:3016/categories${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const edit = response.data;

        dispatch(editCategory(edit));
      });
  };
};

export const startRemoveCategory = id => {
  console.log(id);
  return dispatch => {
    axios
      .delete(`http://localhost:3016/categories/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then(response => {
        const remove = response.data;
        console.log(remove);
        dispatch(removeCategory(remove));
      });
  };
};
