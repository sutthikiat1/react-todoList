import styled from "styled-components";

export const DivBody = styled.div`
  width: 500px;
  height: 85vh;
  overflow: auto;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  border: 1px solid #d5d8dc;
  box-shadow: 2px 2px 18px #566573;
  background-color: #ffffff;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const DivTodoList = styled.div`
  padding: 20px;
`;

export const DivButtonCreateTodo = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Footer = styled.footer`
  padding-top: 10px;
  color: red;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;

  a {
    color: #000;
    font-size: 1.1rem;
    text-decoration: none;
  }
`;
