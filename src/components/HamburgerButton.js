import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const HamburgerButton = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <Wrapper className="hamburger">
      <button
        type="button"
        onClick={() => {
          if (isSidebarOpen) {
            setIsSidebarOpen(false);
          } else setIsSidebarOpen(true);
        }}
      >
        <div
          className={`${isSidebarOpen ? "line line1 clicked1" : "line line1"}`}
        ></div>
        <div
          className={`${isSidebarOpen ? "line line2 clicked2" : "line line2"}`}
        ></div>
        <div
          className={`${isSidebarOpen ? "line line3 clicked3" : "line line3"}`}
        ></div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 28px;
  margin-right: 28px;
  height: 40px;
  button {
    z-index: 900;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    position: relative;
    .line {
      z-index: 900;
      position: absolute;
      left: 0;
      width: 40px;
      border-top: 5px solid var(--white);
      transition: 0.5s;
    }
    .line1 {
      top: 5px;
      z-index: 900;
    }
    .line2 {
      top: 15px;
    }
    .line3 {
      z-index: 900;
      top: 25px;
    }
    .clicked1 {
      z-index: 900;
      top: 15px;
      transform: rotate(-225deg);
    }
    .clicked2 {
      top: 15px;
      left: 15px;
      width: 0;
      border-top: 0 solid transparent;
    }
    .clicked3 {
      z-index: 900;
      top: 15px;
      transform: rotate(-135deg);
    }
  }

  button:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    button {
      display: none;
    }
  }
`;

export default HamburgerButton;
