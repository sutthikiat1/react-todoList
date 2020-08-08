import styled from "styled-components";
import { Label } from "reactstrap";

export const CustomeLabel = styled(Label)`
  color: ${(props) => (props.validate ? "red" : "")};
`;

export const DivModal = styled.div`
  .title {
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid #ccd1d1;
  }

  .fa-calendar-alt {
    color: #5dade2;
  }

  div {
    margin-top: 20px;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin: 10px;
    border-radius: 40px;
    button {
      width: 100px;
    }
  }
`;
