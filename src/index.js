import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, LoginRoute } from "./routes/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import { ContextProvider } from "./hooks/ContextProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";

ReactDOM.render(
  <Router>
    <Switch>
      <LoginRoute exact path="/login" component={LoginPage} />
      <ContextProvider>
        <PrivateRoute exact path="/todo-list" component={TodoListPage} />
      </ContextProvider>

      <PrivateRoute component={ErrorPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
