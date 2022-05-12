import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <header>
          <Link
            to="/"
            className={`${isSidebarOpen ? "logo fade" : "logo"}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            All The Views
          </Link>
          <button type="button" onClick={() => setIsSidebarOpen(false)}>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </button>
        </header>

        <Link
          to="/about"
          className="link"
          onClick={() => setIsSidebarOpen(false)}
        >
          About
        </Link>
        <Link
          to="/places"
          className="link"
          onClick={() => setIsSidebarOpen(false)}
        >
          Places
        </Link>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    width: 100%;
    right: 0;
    padding: 30px 50px;
    z-index: -1;
    height: 100vh;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: 0.5s;
  }
  .show-sidebar {
    z-index: 999;
    transform: translateX(0);
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  button {
    margin-bottom: 40px;
    width: 50px;
    height: 50px;
    border: none;
    background: transparent;
    position: relative;
    .line {
      width: 100%;
      border-top: 5px solid var(--black);
      position: absolute;
    }
    .line1 {
      top: 20px;
      transform: rotate(45deg);
    }
    .line2 {
      top: 20px;
      transform: rotate(-45deg);
    }
  }
  button:hover {
    cursor: pointer;
  }

  a {
    color: var(--black);
    text-decoration: none;
    margin-bottom: 50px;
  }
  .logo {
    opacity: 0;
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: -0.15rem;
  }
  .fade {
    animation: 2s fade-in forwards;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .link {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
