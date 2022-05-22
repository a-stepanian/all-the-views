import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const LogoColumnHorizontal = () => {
  return (
    <Wrapper>
      <div className="horizontal-line"></div>
      <h3 className="atv">ATV</h3>
      <GiMountains className="icon" />
      <GiPhotoCamera className="icon" />
      <GiPineTree className="icon" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--black);
  height: 60px;
  color: var(--green);
  display: flex;
  align-items: center;
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
  .horizontal-line {
    height: 10px;
    width: 100%;
    background-color: var(--green);
    opacity: 0.3;
  }
`;

export default LogoColumnHorizontal;
