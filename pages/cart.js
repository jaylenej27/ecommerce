/** @jsx jsx */
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { jsx, css } from '@emotion/core';

const checkoutButton = css`
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
  margin-top: 40px;

  &:hover {
    transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-color: #82afba;
  }
`;

export default function Cart() {
  return (
    <>
      <Layout>
        <Head>Shopping Cart</Head>

        <div className="container">Can you see me?</div>
        <button css={checkoutButton}>
          <Link href="/checkout">Checkout Button</Link>
        </button>
      </Layout>

      <style jsx>
        {`
          .container {
            max-width: 100%;
            text-align: center;
            justify-content: space-around;
            display: flex;
            position: relative;
            margin-top: 25vh;
          }
        `}
      </style>
    </>
  );
}
