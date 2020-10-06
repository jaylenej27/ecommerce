/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';

const img1 = css`
  position: absolute;
  width: 316px;
  height: 364px;
  left: 271px;
  top: 261px;
  background: #c4c4c4;
`;

const img2 = css`
  position: absolute;
  width: 310px;
  height: 364px;
  left: 853px;
  top: 261px;
  background: #c4c4c4;
`;

const img3 = css`
  position: absolute;
  width: 316px;
  height: 364px;
  left: 271px;
  top: 735px;
  background: #c4c4c4;
`;

const img4 = css`
  position: absolute;
  width: 310px;
  height: 364px;
  left: 853px;
  top: 735px;
  background: #c4c4c4;
`;

export default function ProductList(props) {
  return (
    <Layout>
      <main>
        <div>
          {/* products.map((item) => {
return <li>{products.productName}</li>})  */}
          product list
          <img src="a#" alt="none for now" css={img1} />
          <img src="a#" alt="none for now" css={img2} />
          <img src="a#" alt="none for now" css={img3} />
          <img src="a#" alt="none for now" css={img4} />
        </div>
      </main>
    </Layout>
  );
}
