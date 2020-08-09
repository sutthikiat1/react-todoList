import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../hooks/AuthProvider";

export function LoginRoute({ component: Component, ...rest }) {
  const { verifyToken, auth } = useContext(Context);

  useEffect(() => {
    (async function() {
      await verifyToken();
    })();
  }, [verifyToken]);

  if (auth) {
    return <Route {...rest} render={(props) => <Redirect to="/todo-list" />} />;
  } else {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
}
