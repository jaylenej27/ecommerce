/** @jsx jsx */
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { jsx, css } from '@emotion/core';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: block;
  position: relative;
  margin-top: 15vh;
`;

const videoContainer = css`
  ${centeredContainerStyles}
  position: absolute;
  text-align: center;
  padding: 2rem 0.5rem;
  align-items: center;
  margin: 0;

  button {
    background-color: #e7d187;
    border: 2px solid transparent;
    cursor: pointer;
    padding: 14px 22px 10px;
    color: white;
    font-size: 18px;
    display: flex;
    transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 10px;

    &:hover {
      transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      background-color: #82afba;
    }
  }
`;

const videoDisplay = css`
  position: relative;
  max-width: 100vw;
  object-fit: contain;
  display: block;
  margin-top: 0px;
  z-index: -1;

  video {
    width: 100vw;
    /* height: 80vh; */
  }

  @media (min-width: 768px) {
    overflow: hidden;
    max-height: 80vh;
  }
`;

const firstSectionStyle = css`
  ${centeredContainerStyles}
  margin: 40px 280px;
  padding: 0 24px;
`;

const categoryImageHolder = css`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  img {
    max-width: 19.75rem;
    margin: 0 0.75rem;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
  }

  button {
    bottom: 8px;
    left: 16px;
    background-color: #e7d187;
    border: 2px solid transparent;
    color: #0c0c0c;
    font-size: 18px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 10px;
    width: 95px;

    &:hover {
      transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      background-color: #82afba;
    }
  }
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Applejacks Shoes</title>
      </Head>

      <Layout>
        <main css={centeredContainerStyles}>
          <section css={videoContainer}>
            <button>Shop Now</button>
          </section>
          <section css={videoDisplay}>
            <video src="/promo.mp4" muted loop playsInline autoPlay></video>
          </section>
          <section css={firstSectionStyle}>
            <h2>Shoes for every day and special days</h2>
            <h3>
              With our shoes designed for all day comfort, they can take you to
              and from work or out on the town. Shoes for all people and all
              times.
            </h3>
            <div css={categoryImageHolder}>
              <a href="a#">
                <img
                  src="/heels.jpg"
                  alt="Stitch Fix plus-size clothing outfit including a plus-size navy and white printed jumpsuit with white tee."
                />
                <button>Heels</button>
              </a>
              <div css={categoryImageHolder}>
                <a href="a#">
                  <img
                    src="flats.jpg"
                    alt="Stitch Fix men’s outfit including a pink tee, tan windbreaker jacket and black jogger sweatpants."
                  />
                  <button>Flats</button>
                </a>
              </div>
              <div css={categoryImageHolder}>
                <a href="/productlist">
                  <img
                    src="all.jpg"
                    alt="Stitch Fix Kids blue ombre hoodie sweatshirt with palm tree graphic."
                  />
                  <button>All</button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
