import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from "history";

import "./assets/css/material-dashboard-react.css";

import { Provider } from 'react-redux';
import store from './store';
import indexRoutes from "./routes/index.jsx";
require('../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');
const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return (
          <Provider store={store}>
            <Route path={prop.path} component={prop.component} key={key} />
          </Provider>
        );
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
