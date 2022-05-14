import React from "react";
import { HomeFirst, HomeSecond, HomeThird } from "../components/index";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: var(--black);
`;

export default Home;
