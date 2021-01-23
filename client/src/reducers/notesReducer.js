const initialState = [];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTES": {
      return [...action.payload];
    }
    case "SHOW_NOTES": {
      return state.find(note => note._id == action.payload._id);
    }
    case "EDIT_NOTES": {
      return state.find(note => note._id == action.payload._id);
    }
    case "REMOVE_NOTES": {
      return state.filter(note => note && note._id != action.payload._id);
    }
    case "ADD_NOTE": {
      return [...state, action.payload.note]
    }

    default: {
      return [...state];
    }
  }
};

export default notesReducer;
