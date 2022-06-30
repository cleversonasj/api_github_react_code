import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 550px;
    height: 44px;
    padding: 8px;
    font-weight: 400;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 6px;
    border-radius: 4px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }

  @media(max-width: 700px){
    button {
      padding: 4px 8px;
      height: 30px;
    }

    input{
      height: 30px;
      font-weight: bold;
      font-size: 12px;
    }
  }
`;
