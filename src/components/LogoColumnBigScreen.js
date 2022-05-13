import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const LogoColumnBigScreen = () => {
  const { setPageSelected } = useGlobalContext();

  return (
    <Wrapper>
      <Link to="/about" onClick={() => setPageSelected("about")}>
        <h3 className="atv">ATV</h3>
        <GiMountains className="icon" />
        <GiPhotoCamera className="icon" />
        <GiPineTree className="icon" />
        <div className="vertical-line"></div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    a {
      text-decoration: none;
      color: var(--green);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100vh;
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
        background-color: var(--green);
        opacity: 0.3;
      }
    }
    a:hover {
      color: var(--light-green);
      .vertical-line {
        background-color: var(--light-green);
      }
    }
  }
`;

export default LogoColumnBigScreen;
