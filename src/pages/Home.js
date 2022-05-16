import React, { useEffect } from "react";
import { HomeFirst, HomeSecond, HomeThird } from "../components/index";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setCurrentPage, setLocation, setView } = useGlobalContext();
  useEffect(() => {
    setCurrentPage(null);
    setLocation(null);
    setView(null);
  }, []);

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
