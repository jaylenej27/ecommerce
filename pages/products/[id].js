/** @jsx jsx */
import Head from 'next/head';
import Layout from '../../components/Layout';
import { shoes } from '../../utilities/productdatabase';
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';
import { newProductFromCookies, removeProductFromCookies } from '../../utilities/cookies';

// type Shoes = {
//   id: string;
//   name: string;
//   image: string;
//   url: string;
//   price: number;
// };

// type Props = {
//   product: {
//     id: string;
//     name: string;
//     image: string;
//     url: string;
//     price: number;
//   };
//   cartList: Array<Product>;
//   page: string;
// };

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

export default function SingleShoe(props) {
// console.log(props)
// const [cart, setCart] = useState(props.cartList ?? []);

// const addToCart = () => {
//   const newCart = [...cart];
//   newCart.push(props.product);
//   setCart(newCart);
// };

  const shoe = shoes.find((currentShoe) => {
    if (currentShoe.id === props.id) {
      return true;
    }
    return false;
  });  

  if (!shoe)  return (
    <div>404 oops</div>
  ) 

  return (
    <Layout>
      <Head>
        <title>{shoe.name}</title>
      </Head>
      <div css={top}>
        <div>
          <img src={shoe.image} alt={shoe.alttext} css={productImage} />
        </div>
        <div css={productDisplay}>
          <h1>{shoe.name}</h1>
          <p>€ {shoe.price}</p>
          
          {/* shoe sizes as checkboxes?
          {shoe.sizes.map((size) => {
            return 
            <li>{size}</li>
          })} */}
          
          <p>{shoe.desc}</p>
          
          {/* button that adds item to cart */}
          <button
            css={buyButton} onClick={(e) => {newProductFromCookies(shoe.id)}}
               aria-label={`Add ${shoe.name} to your cart`}
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

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
// console.log(context)
  const itemAddedToCart = allCookies.itemAddedToCart || [];
  // const itemRemovedFromCart = 
 

  return {
    props: { 
    id: context.query.id,
    cart: itemAddedToCart,
    },
  }
}