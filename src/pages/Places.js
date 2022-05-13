import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const Places = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Choose a location</h2>
        <div className="accent-line"></div>
        <p>
          And see some of the incredible views that location has to offer, as
          well as how to get there.
        </p>
      </div>
      <section>
        <article className="card">
          <img src="./img-metalake.jpg" alt="" />
        </article>
        <article className="card">
          <img src="./img-norwaypass.jpg" alt="" />
        </article>
        <article className="card">
          <img src="./img-spiritlake.jpg" alt="" />
        </article>
        <article className="card">
          <img src="./img-metalake.jpg" alt="" />
        </article>
        <article className="card">
          <img src="./img-norwaypass.jpg" alt="" />
        </article>
        <article className="card">
          <img src="./img-spiritlake.jpg" alt="" />
        </article>
      </section>
      <div className="icon-wrapper">
        <h3 className="atv">ATV</h3>
        <GiMountains className="icon" />
        <GiPhotoCamera className="icon" />
        <GiPineTree className="icon" />
        <div className="vertical-line"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  height: 100vh;
  .hero {
    margin-top: 80px;
    margin-left: 20px;
    width: 450px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
  }
  section {
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: var(--white);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding: 50px;
    .card {
      background-color: var(--off-white);
      padding: 20px 20px 20px 20px;
    }
    img {
      max-width: 100%;
    }
  }
  .icon-wrapper {
    display: none;
  }
  h2 {
    font-size: 3.3rem;
    line-height: 3.6rem;
    color: var(--white);
  }
  .accent-line {
    margin-top: 40px;
    width: 100px;
    border-top: 8px solid var(--green);
  }
  p {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.4rem;
    color: var(--white);
    letter-spacing: 0.1rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 560px 1fr 60px;
    .hero {
      margin-top: none;
    }
    .icon-wrapper {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: var(--green);
      .icon {
        font-size: 1.8rem;
      }
      .atv {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: -0.1rem;
      }
      .vertical-line {
        height: 70%;
        width: 10px;
        background-color: var(--green);
        opacity: 0.3;
      }
    }
  }
`;

export default Places;
