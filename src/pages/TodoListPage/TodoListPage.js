import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import Button from "@material-ui/core/Button";
import ModalCreateTodo from "../../components/ModalCreateTodo";
import CardTodo from "../../components/CardTodo";
import axios from "axios";
import { Context } from "../../hooks/ContextProvider";

import { DivBody, DivTodoList, DivButtonCreateTodo, Footer } from "./styles";

const TodoListPage = () => {
  let history = useHistory();
  const { todoLists, setTodoLists } = useContext(Context);
  const [openModalCreateTodo, setOpenModalCreateTodo] = useState(false);

  useEffect(() => {
    (async function() {
      let response = await getTodos();
      if (response) setTodoLists(response.data);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getTodos() {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.get(`${process.env.REACT_APP_API}/todos`, {
        headers: headers,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  function logout() {
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <BasicLayout>
      <DivBody>
        <DivTodoList>
          {todoLists.map((todoList) => {
            return (
              <CardTodo
                key={todoList._id}
                data={todoList}
                getTodos={getTodos}
              />
            );
          })}
        </DivTodoList>
      </DivBody>
      <DivButtonCreateTodo>
        <ModalCreateTodo
          open={openModalCreateTodo}
          setOpen={setOpenModalCreateTodo}
          getTodos={getTodos}
          type="Create"
        />
        <Button
          onClick={() => logout()}
          size="large"
          variant="outlined"
          color="secondary"
        >
          <i className="fas fa-sign-out-alt" />
          &nbsp; Logout
        </Button>
        <Button
          onClick={() => setOpenModalCreateTodo(true)}
          size="large"
          variant="outlined"
          color="primary"
        >
          <i className="fas fa-plus-circle" />
          &nbsp; Create
        </Button>
      </DivButtonCreateTodo>

      <Footer>
        <a
          href="https://github.com/sutthikiat1"
          target="_blank"
          rel="noopener noreferrer"
        >
          sutthikiat &nbsp;
        </a>
        X
        <a
          href="https://github.com/sutthikiat1"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; Todo List by Neversitup Co.,Ltd.
        </a>
      </Footer>
    </BasicLayout>
  );
};

export default TodoListPage;
