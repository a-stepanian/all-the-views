import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div className="links">
        <Link to="/" className="logo">
          All The Views
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/places" className="link">
          Places
        </Link>
      </div>
      <button type="button" onClick={() => setIsSidebarOpen(true)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  background-color: rgba(0, 0, 0, 0.1);
  .links {
    display: flex;
    align-items: flex-end;
    a {
      text-decoration: none;
    }

    .logo {
      margin-right: 100px;
      color: white;
      font-size: 2rem;
      font-weight: 300;
      letter-spacing: -0.1rem;
    }

    .link {
      margin-right: 50px;
      display: none;
      color: white;
      font-size: 1.5rem;
      font-weight: 300;
      letter-spacing: -0.1rem;
    }
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    position: relative;
    .line {
      width: 100%;
      border-top: 5px solid white;
      position: absolute;
    }
    .line1 {
      top: 5px;
    }
    .line2 {
      top: 15px;
    }
    .line3 {
      top: 25px;
    }
  }

  button:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .link {
      display: block;
    }
    button {
      display: none;
    }
  }
`;

export default Navbar;
