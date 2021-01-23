import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {
  startRemoveNotes,
  startGetNotes,
  startShowNotes,
  startEditNotes
} from "./actions/notesAction";

import {
  startGetCategory,
  startShowCategory,
  startEditCategory,
  startRemoveCategory
} from "./actions/categoriesAction";

import { Provider } from "react-redux";

import App from "./App";

const store = configureStore();

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
store.dispatch(startGetNotes());
store.dispatch(startRemoveNotes());
store.dispatch(startShowNotes());
store.dispatch(startEditNotes());
store.dispatch(startGetCategory());
store.dispatch(startShowCategory());
store.dispatch(startEditCategory());
store.dispatch(startRemoveCategory());


const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
