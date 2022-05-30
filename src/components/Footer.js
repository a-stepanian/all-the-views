import React from "react";
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="link-wrapper">
        <a
          href="https://github.com/a-stepanian/all-the-views"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub /> Check out the repo on GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-stepanian/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin /> Connect with me on LinkedIn
        </a>
        <a
          href="https://a-stepanian.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGlobe /> View my portfolio
        </a>
      </div>
      <p>All The Views &copy; 2022</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--dark-green);
  color: var(--off-white);

  .link-wrapper {
    display: flex;
    padding: 7rem 0 5rem;
    flex-direction: column;
    align-items: center;
    a {
      color: var(--off-white);
      line-height: 2rem;
    }
  }
  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    .link-wrapper {
      padding: 5rem 0 1rem;
      flex-direction: row;
      justify-content: center;
      a {
        margin: 0 1rem;
      }
    }
  }
`;

export default Footer;
