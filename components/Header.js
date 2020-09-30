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
  border-bottom: 2px solid #82afba;
  margin-bottom: 3px;
  transition: transform 0.5s ease;
  z-index: 10;
  max-height: 120px;
  display: flex;
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
      background-image: linear-gradient(#7a435a, #bfbfbf);
      background-size: 100% 4px;
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
