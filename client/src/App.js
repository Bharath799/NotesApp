import React from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import List from "./components/notes/List";
import New from "./components/notes/New";

import CateList from "./components/categories/CateList";

import Home from "./Home";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import Show from "./components/notes/Show";
import Edit from "./components/notes/Edit";
import CateShow from "./components/categories/CateShow";
import CateEdit from "./components/categories/CateEdit";
import CateNew from "./components/categories/CateNew";

function App() {
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
    //window.location.reload()
  };
  return (
    <BrowserRouter>
      <div className="container"><br />
        <h1><span className='text-primary'>Redux Notes App</span></h1><br />
        {/* <Link to="/">Home</Link> */}
        {localStorage.getItem("authToken") ? (
          <div className="navbar navbar-dark bg-dark" >
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link> &nbsp;
            <Link to="/categories">Categories</Link> &nbsp;
            <Link to="#" onClick={handleLogOut}>Logout</Link>
          </div>
        ) : (
            <div className="navbar navbar-dark bg-dark">
              <Link to="/login">Login</Link>&nbsp;
              <Link to="/register">Register</Link>&nbsp;
            </div>
          )}

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/login" component={Login} exact={true} />

          <Route path="/notes" component={List} exact={true} />
          <Route path="/notes/new" component={New} />
          <Route path="/notes/:id" component={Show} exact />
          <Route path="/notes/edit/:id" component={Edit} />

          <Route path="/categories" component={CateList} exact={true} />
          <Route path="/categories/new" component={CateNew} exact />
          <Route path="/categories/:id" component={CateShow} exact />
          <Route path="/categories/edit/:id" component={CateEdit} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
