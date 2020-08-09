import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

//icon
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";

import { DivFormLogin, DivInput, DivButtonLogin, CustomeGrid } from "./styles";

const FormLogin = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validateLogin, setValidateLogin] = useState({
    username: false,
    password: false,
  });

  async function onSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    if (username === "") {
      setValidateLogin((prevState) => ({
        ...prevState,
        username: true,
      }));
    }
    if (password === "") {
      setValidateLogin((prevState) => ({
        ...prevState,
        password: true,
      }));
    }

    if (username && password) {
      let data = {
        username: username,
        password: password,
      };

      try {
        let response = await axios.post(
          `${process.env.REACT_APP_API}/users/auth`,
          data
        );
        let token = response.data.token;
        NotificationManager.success("เข้าสู่ระบบสำเร็จ");
        localStorage.setItem("token", token);
        setTimeout(() => {
          history.push("/todo-list");
        }, 400);
      } catch (error) {
        console.log(error);
        NotificationManager.error("อีเมล์หรือรหัสผ่านไม่ถูกต้อง");
      }
    }
  }

  function onChange(e) {
    const type = e.target.id;
    if (type === "username") {
      setUsername(e.target.value);
      setValidateLogin((prevState) => ({
        ...prevState,
        username: false,
      }));
    } else if (type === "password") {
      setPassword(e.target.value);
      setValidateLogin((prevState) => ({
        ...prevState,
        password: false,
      }));
    }
  }

  return (
    <>
      <NotificationContainer />
      <DivFormLogin>
        <Card>
          <CardHeader title="Login Todo List" />
          <CardContent>
            <CustomeGrid item xs={12}>
              <DivInput>
                <TextField
                  error={validateLogin.username}
                  id="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                  label="Username"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </DivInput>
            </CustomeGrid>
            <br />
            <CustomeGrid item xs={12}>
              <DivInput>
                <form
                  onSubmit={(e) => onSubmit(e)}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    error={validateLogin.password}
                    name="any-filed-name-here-password"
                    autoComplete="new-password"
                    value={password}
                    id="password"
                    onChange={(e) => onChange(e)}
                    type="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKey />
                        </InputAdornment>
                      ),
                      autoComplete: "off",
                    }}
                  />
                </form>
              </DivInput>
            </CustomeGrid>
            <CustomeGrid item xs={12}>
              <DivInput>
                <h6>
                  <a href="https://nevers-todo-register.firebaseapp.com/">
                    Register Account
                  </a>
                </h6>
              </DivInput>
            </CustomeGrid>
            <CustomeGrid item xs={12}>
              <DivButtonLogin>
                <Button
                  onClick={(e) => onSubmit(e)}
                  size="large"
                  variant="outlined"
                  color="primary"
                >
                  Login
                </Button>
              </DivButtonLogin>
            </CustomeGrid>
          </CardContent>
        </Card>
      </DivFormLogin>
    </>
  );
};

export default FormLogin;
