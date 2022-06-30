import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;
  width: 100vw;

  h1 {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
  }

  @media(max-width: 700px){
    h1{
      font-size: 20px;
    }
  }
`;
