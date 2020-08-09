import React, { createContext, useState } from "react";
import axios from "axios";

async function getVerifyToken(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.get(`${process.env.REACT_APP_API}/todos`, {
    headers: headers,
  });
  return response;
}

export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState(token ? true : false);

  const verifyToken = async () => {
    try {
      if (token) {
        const resposne = await getVerifyToken(token);
        if (resposne.status === 200) {
          setAuth(true);
          return true;
        } else {
          setAuth(false);
          localStorage.clear();
          return false;
        }
      } else {
        setAuth(false);
        localStorage.clear();
        return null;
      }
    } catch (e) {
      setAuth(false);
      localStorage.clear();
    }
  };

  return (
    <Context.Provider value={{ verifyToken, auth }}>
      {children}
    </Context.Provider>
  );
};
