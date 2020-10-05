/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  position: relative;
  margin-top: 25vh;

  section {
    justify-content: center;
    max-width: 75%;
  }

  ul {
    li {
      list-style: none;
    }
  }
`;

export default function ShipOrReturn(props) {
  return (
    <Layout>
      <main>
        <div css={centeredContainerStyles}>
          <h1>content here</h1>
        </div>
      </main>
    </Layout>
  );
}
