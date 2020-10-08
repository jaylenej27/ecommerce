import Head from 'next/head';
import Layout from '../components/Layout';
import { shoes } from '../utilities/productdatabase';

const Product = () => (
  <Layout>
    <Head>
      <title>All products</title>
    </Head>
    <div>
      {/* <img src={shoe.image} alt={shoe.alttext} /> */}
      <h1>shoe name</h1>
      <h2>price</h2>
      something to display sizes/colors
      <p>description</p>
      <button>Buy Now</button>
    </div>
  </Layout>
);

export default Product;
