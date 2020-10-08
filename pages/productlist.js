/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { shoes } from '../utilities/productdatabase';

const intro = css`
  display: flex;
  justify-content: center;
  margin-top: 180px;
`;

const productImage = css`
  height: 18rem;
  width: 18rem;
  margin: 10px;
  border-radius: 20%;
  cursor: pointer;
  object-fit: cover;
  &:hover {
     {
      -moz-box-shadow: 0 0 10px #666666;
      -webkit-box-shadow: 0 0 10px #666666;
      box-shadow: 0 0 10px #666666;
    }
  }
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
  text-align: center;

  ul {
    li {
    }
  }

  button {
    background-color: #e7d187;
    border: 2px solid transparent;
    color: #0c0c0c;
    font-size: 18px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 10px;
    width: 155px;

    &:hover {
      transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      background-color: #82afba;
    }
  }
`;

export default function DisplayAllProducts() {
  return (
    <div>
      <Head>
        <title>All products</title>
      </Head>

      <Layout>
        <h1 css={intro}>All products</h1>

        <ul css={gallery}>
          {shoes.map((shoe) => {
            return (
              <li key={shoe.id}>
                <h2>{shoe.productname}</h2>
                <h3>{shoe.price}</h3>
                <Link href={`/shoes/${shoe.id}`}>
                  <img
                    css={productImage}
                    src={`${shoe.image}`}
                    alt={shoe.alttext}
                  ></img>
                </Link>
                <button>Add to Cart</button>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}
