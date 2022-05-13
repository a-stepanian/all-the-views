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
  background-color: var(--off-white);
  font-weight: 100;
`;

export default Footer;
