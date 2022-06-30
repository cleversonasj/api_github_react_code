import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 8px 8px;
  width: 350px;
  height: 110px;
  align-content: center;

  @media(max-width: 700px){
    width: 90vw;
    margin: 3px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #808080;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  margin: 8px 0;
  color: #3182ce;
`;
