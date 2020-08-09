import styled from "styled-components";

export const DivCardTodo = styled.div`
  padding: 10px;
  max-height: 100px;
  margin-bottom: 10px;
  border: 1px solid #e5e8e8;
  box-shadow: 4px 4px 18px #b2babb;
  display: flex;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  .bar {
    min-width: 10px;
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

    .fa-dot-circle {
      color: #3f51b5;
      margin: 5px;
      animation: mymove 0.5s infinite;
    }

    @keyframes mymove {
      0% {
        color: #91a5f3;
      }
      50% {
        color: #7b93ef;
      }
      100% {
        color: #3f51b5;
      }
    }

    h6 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .text {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn {
      font-size: 20px;

      &:hover {
        color: #f3483b;
      }
    }
  }

  .detail {
    margin-top: -30px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .fa-info-circle {
      color: #b2babb;
      margin: 5px;
    }

    .text-detail {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h6 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .date h6 {
      color: #ccd1d1;
      font-size: 12px;
    }
  }
`;
