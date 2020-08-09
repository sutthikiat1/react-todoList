import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Button, Label, Input } from "reactstrap";
import moment from "moment";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import SuccessAlert from "../../components/Alert/Success";
import ErrorAlert from "../../components/Alert/Error";
import { Context } from "../../hooks/ContextProvider";

import { DivModal, CustomeLabel } from "./styleds";

const customStyles = {
  overlay: {
    backgroundColor: "#000000a3",
  },
  content: {
    top: "50%",
    left: "49%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
  },
};

const ModalCreateTodo = (props) => {
  const { setTodoLists } = useContext(Context);
  const { open, setOpen, getTodos, type, idTodo } = props;
  const [alert, setAlert] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validateField, setValidateField] = useState({
    title: null,
    description: null,
  });

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  useEffect(() => {
    if (props.title) setTitle(props.title);
    if (props.description) setDescription(props.description);
  }, [props.title, props.description]);

  function onChange(e) {
    const type = e.target.name;
    if (type === "title") {
      setValidateField((prevState) => ({
        ...prevState,
        title: null,
      }));
      setTitle(e.target.value);
    } else if (type === "description") {
      setDescription(e.target.value);
      setValidateField((prevState) => ({
        ...prevState,
        description: null,
      }));
    }
  }

  async function onClick() {
    if (title === "") {
      setValidateField((prevState) => ({
        ...prevState,
        title: "true",
      }));
    }
    if (description === "") {
      setValidateField((prevState) => ({
        ...prevState,
        description: "true",
      }));
    }

    console.log(description, title);

    if (description === "" || title === "") {
      NotificationManager.error("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      let response;
      if (type === "Create") {
        response = await createAndUpdateTodo(type);
      } else if (type === "Edit") {
        response = await createAndUpdateTodo(type, idTodo);
      }
      console.log(response.data);
      if (response.statusText === "OK") {
        if (type === "Create") {
          setTitle("");
          setDescription("");
        }
        let response = await getTodos();
        setTodoLists(response.data);
        setAlert(
          <SuccessAlert
            title={`${type} Success !`}
            hideAlert={() => {
              setAlert(null);
              setOpen(false);
            }}
          />
        );
      } else {
        setAlert(
          <ErrorAlert
            title="ไม่สามารถทำรายการได้ !."
            hideAlert={() => {
              setAlert(null);
            }}
          />
        );
      }
    }
  }

  async function createAndUpdateTodo(type, id) {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const data = {
        title: title,
        description: description,
      };
      let response;
      if (type === "Create") {
        response = await axios.post(
          `${process.env.REACT_APP_API}/todos/`,
          data,
          { headers: headers }
        );
      } else {
        response = await axios.put(
          `${process.env.REACT_APP_API}/todos/${id}`,
          data,
          { headers: headers }
        );
      }

      return response;
    } catch (e) {
      console.log(e);
      setAlert(
        <ErrorAlert
          title="ไม่สามารถทำรายการได้ !."
          hideAlert={() => {
            setAlert(null);
          }}
        />
      );
    }
  }

  return (
    <>
      <NotificationContainer />
      <Modal
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        isOpen={open}
      >
        {alert}
        <DivModal>
          <div className="title">
            <Label className="text-center">{type} a List</Label>
          </div>
          <div>
            <h6>
              <i className="far fa-calendar-alt" />
              &nbsp; วันที่ : {moment().format("DD/MM/YYYY")}
            </h6>
          </div>
          <div>
            <CustomeLabel validate={validateField.title} for="exampleText">
              Title
            </CustomeLabel>
            <Input
              placeholder="กรุณากรอกชื่อ"
              onChange={(e) => onChange(e)}
              value={title}
              type="textarea"
              name="title"
              id="exampleText"
            />
          </div>
          <div>
            <CustomeLabel
              validate={validateField.description}
              for="exampleText"
            >
              Descriptoin
            </CustomeLabel>
            <Input
              value={description}
              onChange={(e) => onChange(e)}
              placeholder="กรุณากรอกรายละเอียด"
              type="textarea"
              name="description"
              id="exampleText"
            />
          </div>
          <div className="btn">
            <Button onClick={() => setOpen(false)} color="danger">
              Cancel
            </Button>
            <Button
              onClick={() => onClick()}
              color={type === "Create" ? "primary" : "warning"}
            >
              {type}
            </Button>
          </div>
        </DivModal>
      </Modal>
    </>
  );
};

export default ModalCreateTodo;
