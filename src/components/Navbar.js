import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { AiFillCaretRight } from "react-icons/ai";
import { Logo, HamburgerButton } from "./";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { currentPage, setCurrentPage, location, view } = useGlobalContext();

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Wrapper>
      <div className="all-links">
        <Link to="/" className="logo" onClick={() => setCurrentPage(null)}>
          <Logo />
        </Link>
        <div className="link-wrapper">
          <Link
            to="/places"
            className={`${
              currentPage === "places" ? "link link-selected" : "link"
            }`}
          >
            Places
          </Link>
        </div>

        {location && (
          <div className="link-wrapper">
            <AiFillCaretRight className="arrow" />
            <Link
              to={`places/${location.urlLoc}`}
              className={`${
                currentPage === "location"
                  ? "link location link-selected"
                  : "location link"
              }`}
            >
              {location.shortLoc}
            </Link>
          </div>
        )}
        {view && (
          <div className="link-wrapper">
            <AiFillCaretRight className="arrow" />
            <Link
              to={`places/${location.urlLoc}/${view.id}`}
              className={`${
                currentPage === "view"
                  ? "link location link-selected"
                  : "location link"
              }`}
            >
              {view.title.length > 14 && width < 900
                ? `${view.title.slice(0, 14)}...`
                : view.title.length > 26 && width < 1100
                ? `${view.title.slice(0, 26)}...`
                : `${view.title}`}
            </Link>
          </div>
        )}
      </div>
      <HamburgerButton />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-between;
  background-color: var(--black);
  .all-links {
    padding-left: 28px;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--white);
    }

    .logo {
      font-size: 1.9rem;
      font-weight: 100;
      letter-spacing: -0.1rem;
    }

    .link-wrapper {
      display: none;
    }
    .link {
      margin: 0 20px;
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      border-bottom: 3px solid transparent;
    }
    .link:hover {
      color: var(--light-green);
    }
    .link-selected {
      border-color: var(--white);
    }
    .link-selected:hover {
      color: var(--white);
      cursor: default;
    }
    .arrow {
      color: var(--off-white);
      transform: translateY(0.2rem);
    }
  }

  @media (min-width: 768px) {
    .all-links {
      .link-wrapper {
        display: flex;
      }
    }
  }
`;

export default Navbar;
