/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { shoes } from '../../utilities/productdatabase';
import nextCookies from 'next-cookies';
import { newProductFromCookies } from '../../utilities/cookies';


const intro = css`
  display: flex;
  justify-content: center;
  margin-top: 180px;
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
  text-align: center;
`;

const imageWrapper = css`
  -moz-box-shadow: 0 0 10px #666666;
  -webkit-box-shadow: 0 0 10px #666666;
  box-shadow: 0 0 10px #666666;
  display: 'flex';
  justify-content: 'center';
  margin: 50px 100px;

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
    margin-bottom: 10px;

    &:hover {
      transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      background-color: #82afba;
    }
  }
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
                <div css={imageWrapper}>
                  <Link
                    href={
                      `/products/${shoe.id}`
                      // as={'/products/' + shoe.id}
                    }
                  >
                    <img
                      css={productImage}
                      src={`${shoe.image}`}
                      alt={shoe.alttext}
                    ></img>
                  </Link>
                  <h2>{shoe.name}</h2>
                  <h3>{shoe.price}</h3>
                  <button onClick={(e) => {newProductFromCookies(shoe.id)}}>Add to Cart</button>

                  {/* button to remove from cart */}
          {/* <button
            css={buyButton}
            onClick={deleteCookie}
               aria-label={`Remove ${shoe.name} from your cart`}
          >
            Remove
          </button> */}
          
                </div>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);

  const itemAddedToCart = allCookies.itemAddedToCart || [];
  const id = allCookies.id || [];
  // const numberofItems = allCookies.numberofItems || 0;
  // const total = allCookies.total || [];

  return {
    props: { 
    id: id,
    itemAddedToCart: itemAddedToCart,
    // numberofItems,
    // total,
    },
  }
}