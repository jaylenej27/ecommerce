/** @jsx jsx */
import Head from 'next/head';
import Layout from '../../components/Layout';
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import { newProductFromCookies } from '../../utilities/cookies';

type Shoes = {
  id: string;
  name: string;
  price: number;
  image: string;
  alttext: string;
  desc: string;
};

type Props = {
  shoes: {
  id: string;
  name: string;
  price: number;
  image: string;
  alttext: string;
  desc: string;
  };
  cartList: Array<Shoes>;
  page: string;
};

const top = css`
  display: flex;
  justify-content: center;
  margin-top: 180px;
`;

const productImage = css`
  height: 18rem;
  width: 18rem;
  margin: 10px;
  border-radius: 20%;
  object-fit: cover;
`;

const productDisplay = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const buyButton = css`
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

export default function SingleShoe(props: Props) {
  if (!props.shoes) {
    return <div>Item not found...</div>;
  }
  console.log(props);
  // const [cart, setCart] = useState(props.cartList ?? []);

  // const addToCart = () => {
  //   const newCart = [...cart];
  //   newCart.push(props.product);
  //   setCart(newCart);
  // };


  return (
    <Layout>
      <Head>
        <title>{props.shoes[0].name}</title>
      </Head>
      <div css={top}>
        <div>
          <img src={props.shoes[0].image} alt={props.shoes[0].alttext} css={productImage} />
        </div>
        <div css={productDisplay}>
          <h1>{props.shoes[0].name}</h1>
          <p>€{props.shoes[0].price}</p>

          <p>{props.shoes[0].info}</p>

          {/* button that adds item to cart */}
          <button
            css={buyButton}
            onClick={(e) => {
              newProductFromCookies(props.shoes[0].id);
            }}
            aria-label={`Add ${props.shoes[0].name} to your cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
}

//This is run by Next.js BEFORE the component above
//is run, and passes in the props - all of this is inside the server!
//This does not show up in the browser

export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  // console.log(context)
  const itemAddedToCart = allCookies.itemAddedToCart || [];
  const { getProductById } = await import ('../../utilities/productdatabase');
  const shoes = await getProductById(context.params.id);
 

  return {
    props: {
      id: context.params.id,
      shoes,
      cart: itemAddedToCart,
    },
  };
}
