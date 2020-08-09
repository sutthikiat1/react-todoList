import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../hooks/AuthProvider";
import { ContextProvider } from "../hooks/ContextProvider";

export function PrivateRoute({ component: Component, ...rest }) {
  const { verifyToken, auth } = useContext(Context);

  useEffect(() => {
    (async function() {
      await verifyToken();
    })();
  }, [verifyToken]);

  if (auth && rest.path === "/") {
    return (
      <ContextProvider>
        <Route
          {...rest}
          render={(props) =>
            auth ? <Redirect to="/todo-list" /> : <Component {...props} />
          }
        />
      </ContextProvider>
    );
  } else {
    if (auth) {
      return (
        <ContextProvider>
          <Route {...rest} render={(props) => <Component {...props} />} />
        </ContextProvider>
      );
    } else {
      return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
    }
  }
}
