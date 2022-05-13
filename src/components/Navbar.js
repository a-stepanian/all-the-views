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
  .links {
    display: flex;
    align-items: flex-end;
    a {
      text-decoration: none;
      color: var(--white);
    }

    .logo {
      margin-right: 100px;
      font-size: 2rem;
      font-weight: 100;
      letter-spacing: -0.1rem;
    }

    .link {
      margin-right: 50px;
      display: none;
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      border-bottom: 3px solid transparent;
    }
    .link:hover {
      border-color: 3px solid var(--white);
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
      border-top: 5px solid var(--white);
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
    .links {
      .link {
        display: block;
      }
    }
    button {
      display: none;
    }
  }
`;

export default Navbar;
