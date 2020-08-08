import styled from "styled-components";

export const DivCardTodo = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e5e8e8;
  box-shadow: 4px 4px 14px #b2babb;
  border-radius: 10px;

  display: flex;
  .bar {
    width: 10px;
    background: ${(props) => props.color};
    border-radius: 10px;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;

    .text {
      width: 100%;
    }

    .btn {
      font-size: 20px;

      &:hover {
        color: red;
      }
    }
  }

  .detail {
    margin-top: -20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .date h6 {
      font-size: 12px;
    }
  }
`;
