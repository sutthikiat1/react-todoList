import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const DivFormLogin = styled.div`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding-top: 10%;
`;

export const CustomeGrid = styled(Grid)`
  padding-top: 10px;
`;

export const DivInput = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const DivButtonLogin = styled.div`
  text-align: center;
  margin: 0 auto;

  button {
    &:hover {
      background-color: #3f51b5;
      color: #ffffff;
    }
  }
`;
