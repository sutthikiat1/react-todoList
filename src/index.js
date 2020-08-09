import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { LoginRoute } from "./routes/LoginRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import { AuthProvider } from "./hooks/AuthProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";

ReactDOM.render(
  <AuthProvider>
    <Router forceRefresh={true}>
      <Switch>
        <LoginRoute path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={TodoListPage} />
        <PrivateRoute exact path="/todo-list" component={TodoListPage} />
        <Route exact component={ErrorPage} />
      </Switch>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
