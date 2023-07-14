import React from "react";
import styled from 'styled-components';

const FooterBody = styled.div`
  width: 100vw;
  height: 68px;
  border-top: 1px solid;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: gray;
  padding-top: 20px;
  font-size: small;
`;


function Footer() {
  return <FooterBody>개인정보 처리방침 | 이용 약관<br/>All rights reserved @ Codestates</FooterBody>

}

export default Footer;