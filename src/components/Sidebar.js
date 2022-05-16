import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, setCurrentPage } =
    useGlobalContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <Link
          to="/"
          className="link"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/places"
          className="link"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          Places
        </Link>
        <div className="green-column">
          <div className="icon-wrapper">
            <h3 className="atv">ATV</h3>
            <GiMountains className="icon" />
            <GiPhotoCamera className="icon" />
            <GiPineTree className="icon" />
            <div className="vertical-line"></div>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    width: 100%;
    right: 0;
    z-index: -1;
    height: 100vh;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: 0.5s;
  }
  .show-sidebar {
    z-index: 100;
    transform: translateX(0);
  }
  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  a {
    color: var(--off-white);
    text-decoration: none;
    margin: 50px 0;
  }

  .link {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  .green-column {
    position: absolute;
    right: 0;
    width: 95px;
    height: 100vh;
    padding-top: 25px;
    background-color: var(--green);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    button {
      z-index: 999;
      width: 50px;
      height: 50px;
      border: none;
      background: transparent;
      position: relative;
      .line {
        width: 100%;
        border-top: 5px solid var(--off-white);
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
    .icon-wrapper {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
    .icon {
      margin: 7px;
      font-size: 1.8rem;
    }
    .atv {
      margin: 7px;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: -0.1rem;
    }
    .vertical-line {
      height: 20%;
      width: 10px;
      background-color: var(--black);
      opacity: 0.5;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default Sidebar;
