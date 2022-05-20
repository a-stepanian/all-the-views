import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const FullScreen = () => {
  const { view, setFullScreen } = useGlobalContext();

  const pageHeight = document.body.scrollHeight;
  console.log(pageHeight);

  return (
    <Wrapper
      onClick={() => setFullScreen(false)}
      style={{ height: `${pageHeight}px` }}
    >
      <img src={view.img} alt={view.title} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  img {
    object-fit: cover;
    min-width: 992px;
    max-width: 100%;
  }
  img:hover {
    cursor: zoom-out;
  }
`;

export default FullScreen;
