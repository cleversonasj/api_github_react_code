import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media(max-width: 700px){
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    text-align: center;
  }

`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 38px;
    font-weight: bold;
    color: #FFD700;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  h4 {
    font-size: 10px;
  }

  span{
    font-size: 13px;
  }

  @media(max-width: 700px){
    
    h1{
      font-size: 30px;
    }

    h3{
      font-size: 16px;
    }

    h4{
      font-size: 12px;
    }

    span{
      font-size: 12px;
    }
  }

`;

export const WrapperStatusCount = styled.div`
  display: flex;
  color: #FFD700;
  align-items: center;
  div {
    margin: 14px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 15px;
    color: #b8d7e9;
  }

  @media(max-width: 700px){
    a{
      font-size: 12px;
    }
  }


`;

export const WrapperImage = styled.img`
  border-radius: 5%;
  width: 200px;
  margin: 8px;

  @media(max-width: 700px){
    width: 120px;
  }

`;
