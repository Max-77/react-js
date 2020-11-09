import './Menu.css'
import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Register from './Register'
import Mainpage from './Mainpage'
import Login from './Login'

function Menu() {
  return (
      <Router>
      <div class="Menu">
          <nav>
              <Link to="/"><a>Main page</a></Link>
              <Link to="/register"><a>Register</a></Link>
              <Link to="/login"><a>Login</a></Link>
          </nav>
      </div>
          <Switch>
              <Route path="/register">
                  <Register />
              </Route>
              <Route path="/login">
                    <Login />
              </Route>
              <Route path="/">
                  <Mainpage />
              </Route>
          </Switch>
      </Router>
  );
}

export default Menu;
