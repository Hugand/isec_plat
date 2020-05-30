import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login'
import {isSessionCookieSet} from './sessions.js'
import Error500 from './pages/500'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      isSessionCookieSet()
      ? <App {...props}  page={rest.page} />
      : <Redirect to='/login' />
  )} />
)

function routing() {
  return (
      <Router>
          <div>
              <Route path="/"  render={(props) => <Redirect to='/cadeiras' />} exact/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/cadeiras" page={"CADEIRAS_LIST"}/>
              <PrivateRoute path="/cadeira_info"  page={"CADEIRA_INFO"}
              />
              <PrivateRoute path="/profs"  page={"PROFS_LIST"} />
                <PrivateRoute path="/prof_info"  page={"PROF_INFO"}/>
              <Route path="/500_error" component={Error500}/>
              {/* <Route path="/login" component={Login}/> */}
          </div>
      </Router>
  )
}

ReactDOM.render(routing(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
