import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { HomeFirst, HomeSecond, HomeThird } from "../components/index";
import styled from "styled-components";

const Home = () => {
  const { setCurrentPage, setLocation, setView } = useGlobalContext();
  useEffect(() => {
    setCurrentPage(null);
    setLocation(null);
    setView(null);
  });

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
