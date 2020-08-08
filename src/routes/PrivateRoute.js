import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, ...rest }) {
  let token = localStorage.getItem("token");
  const verify = token ? true : false;

  if (verify && rest.path === undefined) {
    console.log(rest.path, 0);
    return (
      <Route
        {...rest}
        render={(props) =>
          verify ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    );
  } else {
    if (verify) {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    } else {
      return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
    }
  }
}

export function LoginRoute({ component: Component, ...rest }) {
  let token = localStorage.getItem("token");
  if (token) {
    return (
      //ถ้ามี token เข้า path login ให้ไปหน้าที่ตั้งค่าไว้อัตโนมัติ
      <Route {...rest} render={(props) => <Redirect to="/todo-list" />} />
    );
  } else {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
}
