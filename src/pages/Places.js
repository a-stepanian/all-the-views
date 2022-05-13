import React from "react";
import styled from "styled-components";
import { GiMountains, GiPhotoCamera, GiPineTree } from "react-icons/gi";

const Places = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Choose a location</h2>
        <div className="accent-line"></div>
        <p>Click on an image to learn more about its location.</p>
      </div>
      <section>
        <article className="card">
          <img src="./img-metalake.jpg" alt="Meta Lake and Mount Adams" />
          <footer>
            <p>Meta Lake and Mount Adams</p>
          </footer>
        </article>
        <article className="card">
          <img
            src="./img-norwaypass.jpg"
            alt="Mount St. Helens from Norway Pass"
          />
          <footer>
            <p>Mount St. Helens from Norway Pass</p>
          </footer>
        </article>
        <article className="card">
          <img src="./img-spiritlake.jpg" alt="Spirit Lake from Windy Ridge" />
          <footer>
            <p>Spirit Lake from Windy Ridge</p>
          </footer>
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
  align-items: center;
  background-color: var(--black);
  height: 100vh;
  .hero {
    margin-top: 80px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
    h2 {
      font-size: 3.3rem;
      line-height: 3.6rem;
      color: var(--white);
      text-align: center;
    }
    .accent-line {
      margin-top: 40px;
      width: 100px;
      border-top: 8px solid var(--green);
    }
    p {
      text-align: center;
      margin-top: 20px;
      font-size: 1rem;
      line-height: 1.4rem;
      color: var(--white);
      letter-spacing: 0.1rem;
    }
  }
  section {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 100px 20px;
    .card {
      background-color: var(--off-white);
      padding: 10px;
      margin-bottom: 10px;
      img {
        max-width: 100%;
      }
      footer {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          color: var(--black);
        }
      }
    }
  }
  .icon-wrapper {
    display: none;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 560px 1fr 60px;
    align-items: start;
    .hero {
      height: 100vh;
      margin-top: none;
      margin-left: 20px;
      align-items: left;
      h2 {
        text-align: left;
      }
      p {
        text-align: left;
      }
    }
    section {
      height: auto;
    }

    .icon-wrapper {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      color: var(--green);
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
  }
  @media (min-width: 1200px) {
    section {
      padding: 100px;
    }
  }
`;

export default Places;
