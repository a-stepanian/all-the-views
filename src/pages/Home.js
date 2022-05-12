import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <h2>Discover the best views in the Pacific Northwest</h2>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 800px;
  background-image: url("/IMG-1716.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  h2 {
    margin: 20% 5%;
    font-size: 5.5rem;
    text-align: center;
    text-shadow: 0 0 150px rgb(255, 255, 255);
    line-height: 5rem;
    font-family: "Titillium Web", sans-serif;
  }
`;

export default Home;
