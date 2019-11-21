/*
AUTHOR: Jordan Winslow
DESCRIPTION: Created in 4-6 hours for a code test.
This app uses asynchronous redux sagas to fetch data from 
an API and store it in state where it is then manipulated by
the user to create new "posts" for a series of users.

This project combines React Router, Redux and Sagas
to simulate an enterprise-level application.
*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserTable from "./components/UserTable";
import UserDetails from "./components/UserDetails";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user/:userId" component={UserDetails} />
        <Route path="/" component={UserTable} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
