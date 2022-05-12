import React from "react";
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
        <button type="button" onClick={() => setIsSidebarOpen(false)}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
        <Link to="/" className="logo">
          All The Views
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/places" className="link">
          Places
        </Link>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    right: 0;
    padding: 30px;
    z-index: -1;
    height: 100vh;
    background-color: gray;
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
  button {
    margin-bottom: 40px;
    width: 50px;
    height: 50px;
    border: none;
    background: transparent;
    position: relative;
    .line {
      width: 100%;
      border-top: 5px solid white;
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
    text-decoration: none;
    margin-bottom: 50px;
  }
  .logo {
    color: white;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: -0.1rem;
  }
  .link {
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -0.1rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
