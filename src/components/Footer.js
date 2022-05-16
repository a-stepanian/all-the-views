import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <a href="https://github.com/a-stepanian/all-the-views" target={"_blank"}>
        Check out the repo on GitHub
      </a>
      <a href="#" target={"_blank"}>
        View my portfolio
      </a>
      <a href="#" target={"_blank"}>
        Connect with me on LinkedIn
      </a>
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
