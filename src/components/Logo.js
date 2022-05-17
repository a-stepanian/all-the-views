import React from "react";
import styled from "styled-components";
const Logo = () => {
  return (
    <Wrapper>
      <div className="rectangle" />
      <h1>
        All The <span>Views</span>
      </h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 3rem;
  display: flex;
  color: var(--off-white);
  .rectangle {
    width: 2rem;
    height: 100%;
    border: 5px solid var(--off-white);
  }
  h1 {
    width: 7rem;
    padding-left: 0.5rem;
    font-weight: 100;
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
    line-height: 1.35rem;
    span {
      font-weight: 300;
      font-size: 1.9rem;
      letter-spacing: 0.1rem;
    }
  }
`;

export default Logo;
