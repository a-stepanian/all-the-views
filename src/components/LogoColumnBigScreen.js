import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const LogoColumnBigScreen = () => {
  return (
    <Wrapper>
      <h3 className="atv">ATV</h3>
      <GiMountains className="icon" />
      <GiPhotoCamera className="icon" />
      <GiPineTree className="icon" />
      <div className="vertical-line"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    color: var(--green);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
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
      height: 80%;
      width: 10px;
      background-color: var(--green);
      opacity: 0.3;
    }
  }
`;

export default LogoColumnBigScreen;
