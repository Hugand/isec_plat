import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


function routing() {
  return (
      <Router>
          <div>
              <Route path="/" render={() => {window.location = "/cadeiras"}} exact/>
              <Route path="/cadeiras"
                render={(props) => <App {...props} page={"CADEIRAS_LIST"} />}/>
              <Route path="/cadeira_info"
                render={(props) => <App {...props} page={"CADEIRA_INFO"} />}
              />
              <Route path="/profs"
                render={(props) => <App {...props} page={"PROFS_LIST"} />}/>
                <Route path="/prof_info"
                  render={(props) => <App {...props} page={"PROF_INFO"} />}/>
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
