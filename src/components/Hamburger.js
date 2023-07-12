import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faStar } from "@fortawesome/free-solid-svg-icons";


const HamburgerDropdown = styled.div`
  > div.top,
    div.middle,
    div.bottom {
      width: 200px;
      height: calc(170px / 3);
      background-color: lightgray;
      text-align: center;
      font-size: 20px;
      line-height: calc(170px / 3);
    }
  > div.top {
      border-radius: 15px 15px 0 0;
      border-bottom: 1px solid;
    
  }
  > div.middle {
      border-bottom: 1px solid;
  }
  > div.bottom {
      border-radius: 0 0 15px 15px;
  }
`;


function Hamburger() {
  return (
    <HamburgerDropdown>
      <div className="top">정윤민님, 안녕하세요!</div>
      <div className="middle">
        <FontAwesomeIcon icon={faGift} />&nbsp;
        상품리스트 페이지
      </div>
      <div className="bottom">
        <FontAwesomeIcon icon={faStar} />&nbsp;
        북마크 페이지
      </div>
    </HamburgerDropdown>
  );
  
}

export default Hamburger;