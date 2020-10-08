/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { shoes } from '../utilities/productdatabase';

const intro = css`
  display: flex;
  justify-content: center;
  /* margin-bottom: 50px; */
  margin-top: 120px;
`;

const product = css`
  height: 200px;
  margin: 10px;
  border-radius: 20%;
  cursor: pointer;
  &:hover {
     {
      -moz-box-shadow: 0 0 20px #666666;
      -webkit-box-shadow: 0 0 20px #666666;
      box-shadow: 0 0 20px #666666;
    }
  }
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
`;

export default function DisplayAllProducts() {
  return (
    <div>
      <Head>
        <title>All products</title>
      </Head>

      <Layout>
        <h1 css={intro}>Our shoes</h1>

        <ul css={gallery}>
          {shoes.map((shoe) => {
            return (
              <li key={shoe.id}>
                <h2>${shoe.name}</h2>
                <Link href={`/shoes/${shoe.id}`}>
                  <img css={product} src={`${shoe.image}`} alt="shoe"></img>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

<div class="grid-container">
  <div class="img1"></div>
  <div class="img2"></div>
  <div class="img3"></div>
  <div class="img4"></div>
</div>

.grid-container {
  display: grid;
  grid-template-columns: 0fr 1fr 1fr 0fr;
  grid-template-rows: 0.5fr 1fr 1fr 0.5fr;
  gap: 25px 45px;
  grid-template-areas:
    ". . . ."
    ". img1 img2 ."
    ". img3 img4 ."
    ". . . .";
}

.img1 { grid-area: img1; }

.img2 { grid-area: img2; }

.img3 { grid-area: img3; }

.img4 { grid-area: img4; }
