import React, { useState } from "react";
import styled from 'styled-components';
import Hamburger from "./Hamburger";

const HeaderBody = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #fff;
  /* padding: calc((70px - 28px) / 2); */
  /* box-sizing: border-box; */
  display: flex;
  position: sticky;
  align-items: center;
  border-bottom: 1px solid;
`;

const Logo = styled.div`
  height: 28px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  > div.a {
    background-color: rgb(49, 12, 202);
    margin-left: 55%;
    width: 28px;
    height: 12px;
    border-radius: 15px;
  }
  > div.b {
    background-color: rgb(7, 16, 79);
    margin-left: 5px;
    margin-top: 4px;
    width: 40px;
    height: 12px;
    border-radius: 15px;
  }
  > div.c {
    background-color: rgb(7, 16, 79);
    margin-top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 15px;
  }
`;

const CozShopping = styled.div`
  margin-left: 5px;
  height: 28px;
  font-size: 40px;
  font-weight: 500;
  line-height: 68%;
`;

const Menu = styled.div`
  height: 28px;
  width: 30px;
  position: absolute;
  right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div.a {
    height: 4px;
    width: 100%;
    background-color: black;
    border-radius: 10px;
  }
  > div.b {
    height: 4px;
    width: 100%;
    background-color: black;
    border-radius: 10px;
  }
  > div.c {
    height: 4px;
    width: 100%;
    background-color: black;
    border-radius: 10px;
  }
`;


function Header() {
  const [view, setView] = useState(false);

  const dropHamburger = () => {
    setView(!view);
  }

  return (
    <HeaderBody>
      <Logo>
        <div className="a"></div>
        <div className="b"></div>
        <div className="c"></div>
      </Logo>
      <CozShopping>COZ Shopping</CozShopping>
      <Menu onClick={dropHamburger}>
        <div className="a"></div>
        <div className="b"></div>
        <div className="c"></div>
      </Menu>
      {view && <Hamburger />}
    </HeaderBody>
    )
  }

export default Header;