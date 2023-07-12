import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  text-align: center;
  padding-top: 50%;
`;

function Main() {
  return (
    <>
      <Header/>  
      <Background>여기는 메인 페이지입니다.</Background>
    </>  
  );
}

export default Main;
