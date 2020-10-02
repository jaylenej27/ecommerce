/** @jsx jsx */
// import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: block;
  position: relative;
  margin-top: 15vh;

  ul {
    li {
      list-style: none;
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <div css={centeredContainerStyles}>
        <ul>
          <Link href="a#">
            <li>Imprint</li>
          </Link>
          <Link href="a#">
            <li>Data Privacy</li>
          </Link>
          <Link href="a#">
            <li>Facebook</li>
          </Link>
          <Link href="a#">
            <li>Instagram</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}