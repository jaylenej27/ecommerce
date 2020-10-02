/** @jsx jsx */
import Link from 'next/link';
import { jsx, css } from '@emotion/core';

const headerStyles = css`
  background: white;
  font-weight: medium;
  font-size: 0.9375rem;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: transform 0.5s ease;
  border-bottom: 3px solid #82afba;
  margin-bottom: 3px;
  transition: transform 0.5s ease;
  z-index: 10;
  max-height: 120px;
  /* display: flex; */

  /* @media (max-width: 700px) {
  display: grid;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100vw;
  grid-template-columns: 1fr 50px 50px;
  justify-items: center;
  align-items: center;
  background: beige;
  padding: 10px 0;
  z-index: 200;
  border-bottom: 2px solid #d9b99b;

  button {
    padding-right: 3px;
  } */
`;

const navUL = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 100%;
  top: 0;
  justify-content: space-around;
  transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transition: outline-offset 0.15s ease-out;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #7a435a;
    transition: color 0.2s;
    line-height: 31px;
    transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-position-y: 100%;
    &:hover {
      background-image: linear-gradient(#7a435a, #9171b3);
      background-size: 100% 3px;
      background-position-x: 50%;
      background-repeat: no-repeat;
    }

    li {
      display: inline;
    }
  }
  img {
    text-align: left;
    padding: 0 0.625rem 0 0.85rem;
    margin: 0;
    max-height: 141px;
  }

  /* @media (max-width: 700px) {
    position: absolute;
    width: 100vw;
    height: 20vh;
    display: grid;
    background: #d9b99b;
    top: 10vh;
    padding: 30px;
    z-index: 200;
    transition: all 0.4s;
  } */
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div css={navUL}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/shop">
          <a>Shop</a>
        </Link>

        <Link href="/about">
          <a>About us</a>
        </Link>

        <img src="/logo.png" alt="transparent logo" />

        <Link href="/contact">
          <a>Contact Us</a>
        </Link>

        <Link href="/faq">
          <a>FAQ</a>
        </Link>

        <Link href="/ship-return">
          <a>Shipping & Returns</a>
        </Link>
      </div>
    </header>
  );
}
