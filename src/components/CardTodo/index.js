import React, { useState, useContext, useEffect } from "react";
import { DivCardTodo, DivContent } from "./styles";
import ConfrimAlert from "../../components/Alert/Confrim";
import SuccessAlert from "../../components/Alert/Success";
import axios from "axios";
import moment from "moment";
import { Context } from "../../hooks/ContextProvider";
import ModalCreateTodo from "../../components/ModalCreateTodo";

const CardTodo = (props) => {
  const { setTodoLists } = useContext(Context);
  const { data, getTodos } = props;
  const { title, description, createdAt, _id } = data;
  const [alert, setAlert] = useState(null);
  const colors = ["#EC7063", "#85C1E9", "#82E0AA", "#C39BD3", "#DC7633"];
  const random_color = colors[Math.floor(Math.random() * colors.length)];
  const createDate = moment(createdAt).format("DD-MM-YYYY HH:mm");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    return () => {
      setAlert(null);
    };
  }, []);

  function confrimDeleteTodo(title, id) {
    setAlert(
      <ConfrimAlert
        title="โปรดยืนยันอีกครั้ง"
        description={title}
        hideAlert={() => setAlert(null)}
        onConfirm={() => deleteTodo(id)}
      />
    );
  }

  async function deleteTodo(id) {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/todos/${id}`,
        { headers: headers }
      );
      if (response.statusText === "OK") {
        setAlert(<SuccessAlert hideAlert={() => setAlert(null)} />);
        setTimeout(async () => {
          let response = await getTodos();
          setTodoLists(response.data);
        }, 1100);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <ModalCreateTodo
        open={openModal}
        setOpen={setOpenModal}
        getTodos={getTodos}
        title={title}
        description={description}
        type="Edit"
        idTodo={_id}
      />
      <DivCardTodo color={random_color}>
        {alert}
        <div className="bar"></div>
        <DivContent>
          <div className="title">
            <div onClick={() => setOpenModal(true)} className="text">
              <h5>
                Title :{" "}
                <span style={{ fontSize: 16 }}>
                  {title ? title : "ไม่มีข้อมูล"}
                </span>
              </h5>
            </div>
            <div onClick={() => confrimDeleteTodo(title, _id)} className="btn">
              <i className="fas fa-times-circle" />
            </div>
          </div>
          <div className="detail" onClick={() => setOpenModal(true)}>
            <div>
              <h5>
                Detail :{" "}
                <span style={{ fontSize: 16 }}>
                  {description ? description : "ไม่มีข้อมูล"}
                </span>
              </h5>
            </div>
            <div className="date">
              <h6>{createDate}</h6>
            </div>
          </div>
        </DivContent>
      </DivCardTodo>
    </>
  );
};

export default CardTodo;
