import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { GrFormClose } from "react-icons/gr";

const FullScreen = () => {
  const { view, setFullScreen } = useGlobalContext();

  const pageHeight = document.body.scrollHeight;

  return (
    <Wrapper
      onClick={() => setFullScreen(false)}
      style={{ height: `${pageHeight}px` }}
    >
      <img src={view.img} alt={view.title} />
      <button className="close-btn">
        <GrFormClose />
      </button>
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
  .close-btn {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .close-btn:hover {
    cursor: pointer;
  }
`;

export default FullScreen;
