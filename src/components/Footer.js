import React from "react";
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <a href="https://github.com/a-stepanian/all-the-views" target={"_blank"}>
        <BsGithub /> Check out the repo on GitHub
      </a>
      <a href="#" target={"_blank"}>
        <BsGlobe />
        View my portfolio
      </a>
      <a href="#" target={"_blank"}>
        <BsLinkedin />
        Connect with me on LinkedIn
      </a>
      <p>All The Views &copy; 2022</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 100px 0 10px;
  display: flex;
  height: 50vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--dark-green);
  color: var(--off-white);
  a {
    color: var(--off-white);
  }
  p {
    font-weight: 100;
  }
`;

export default Footer;
