import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h2>Check out the repo on GitHub</h2>
      <h2>View my portfolio</h2>
      <h2>Connect with me on LinkedIn</h2>
      <p>All The Views &copy; 2022</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--off-white);
  p {
    font-weight: 100;
  }
`;

export default Footer;
