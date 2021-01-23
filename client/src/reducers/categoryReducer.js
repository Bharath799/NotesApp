const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY": {
      return [...action.payload];
    }
    case "SHOW_CATEGORY": {
      return state.find(cate => cate._id == action.payload._id);
    }
    case "EDIT_CATEGORY": {
      return state.find(cate => cate._id == action.payload._id);
    }
    case "REMOVE_CATEGORY": {
      return state.filter(cate => cate._id != action.payload._id);
    }

    default: {
      return [...state];
    }
  }
};

export default categoryReducer;
