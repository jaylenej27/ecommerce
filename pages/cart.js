/** @jsx jsx */
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
// import {getProductFromCookies, removeProductFromCookies} from '../utilities/cookies'
import { shoes } from '../utilities/productdatabase';
import RemoveFromCart from '../components/RemoveFromCart';

const styledButton = css`
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

export function totalSum(itemsInCart) {
  return itemsInCart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
}

function CartPage({ cart, products }) {
  const cartTest = cookie.get('shoppingCart');
  console.log("cartlist" , cartTest)
  const itemsInCart = cart || [];
  const totalCart = totalSum(itemsInCart);
  
// const list = shoes.filter(id => id =  cartTest.id)
  return (
    <div>
      <Head>
        <title>Your Cart </title>
        <link rel="icon" href="/siteicon.png" />
      </Head>
      <Layout>
      <div className="container">
        <h1>Shopping Cart</h1>
        <Link href="/products/productlist">
          <a css={styledButton}>Back to shop</a>
        </Link>
        <div className="tableItems">
          <div className="headings">
            <h4>Product</h4>
            <h4>Description</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>&nbsp;</h4>
          </div>
          {itemsInCart.length === 0
            ? 'The cart is empty...'
            : itemsInCart.map((item) => {
                return (
                  <div data-cy={'item-cart'} className="item" key={item.id}>
                    <img src={item.img} alt="item" />
                    <p>{item.name}</p>
                    <span data-cy={'amount-cart'} className="buttonz">
                      {item.amount === 1 ? (
                        ''
                      ) : (
                        <ReduceOneItem
                          item={item}
                          cart={cart}
                          products={products}
                        />
                      )}

                      <p className="amount-cart">{item.amount}</p>

                      <AddOneItem
                        item={item}
                        cart={cart}
                        products={products}
                        itemsInCart={itemsInCart}
                      />
                    </span>
                    <p className="total-cart">{item.price}€</p>

                    <RemoveFromCart item={item} itemsInCart={itemsInCart} />
                  </div>
                );
              })}
        </div>
        <p className="total">
          Total: {totalCart}
          {totalSum(itemsInCart)}€<br></br>
          {itemsInCart.length === 0 ? (
            ''
          ) : (
            <Link href="/checkout">
              <a data-cy="checkout-button">
                <button css={styledButton}>Proceed to checkout</button>
              </a>
            </Link>
          )}
        </p>
      </div>
      </Layout>
      <style jsx>{`
        .container {
          margin-top: 140px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          background-color: white;
          border-radius: 20px;
          padding: 10px;
        }
        h1 {
          margin-left: 15px;
        }
        a {
          margin-left: 20px;         
        }       
        .tableItems {
          padding: 10px;
          text-align: center;
          border-bottom: 1px solid #2f3640;
        }
        .headings {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 10px;
        }
        .item {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
          grid-gap: 10px;
        }
        .buttonz {
          display: flex;
          flex-direction: row;
          padding: 0px;
          justify-content: center;
          align-items: baseline;
        }
        img {
          height: 70px;
          align-self: center;
          margin-left: 30px;
        }
        input {
          padding: 5px;
          border-radius: 5px;
          width: 50px;
          text-align: center;
        }
        .total {
          text-align: right;
          font-size: 20px;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
export default CartPage;

export async function getServerSideProps(context) {
  const { cart } = await nextCookies(context);
  // const { getProducts } = await import('../db.js');
  // const products = await getProducts();

  return {
    // will be passed to the page component as props
    props: {
      ...(cart ? { cart: cart } : undefined),
      shoes,
    },
  };
}

