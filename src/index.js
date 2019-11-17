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
