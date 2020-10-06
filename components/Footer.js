/** @jsx jsx */
// import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: space-between;
  display: block;
  position: relative;
  margin-top: 15vh;
  border-top: 3px solid #82afba;

  ul {
    li {
      list-style: none;
      display: inline;
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
          <br />
          <Link href="a#">
            <li>Data Privacy</li>
          </Link>
          <br />
          <Link href="https://www.facebook.com/applejacks_shoes">
            <img
              src="/facebook.svg"
              alt="instagram logo"
              style={{ height: 20 }}
            />
          </Link>
          <br />
          <Link href="https://www.instagram.com/applejacks_shoes">
            <img
              src="/instagram.svg"
              alt="instagram logo"
              style={{ height: 20 }}
            />
          </Link>
        </ul>
        <div>
          <p style={{ fontSize: 8 }}>
            Icons made by
            <Link
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </Link>
            from
            <Link href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
