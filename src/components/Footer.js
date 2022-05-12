import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Wrapper>All The Views &copy; 2022</Wrapper>;
};

const Wrapper = styled.footer`
  width: 100%;
  height: 150px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default Footer;
