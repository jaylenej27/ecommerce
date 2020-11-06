/** @jsx jsx */
// import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import Cookies from 'js-cookie';

const addToCartButton = css`
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

function AddToCart(props) {
  const makeCookies = () => {
    let newCookies = [];
    const lastCookies = Cookies.get('shoppingCart');
    lastCookies === undefined
      ? (newCookies = [props.items])
      : (newCookies = [...JSON.parse(lastCookies), props.items]);
    Cookies.set('shoppingCart', newCookies);
  };

  return (
    
      <button
        css={addToCartButton}
        data-cy={'add-toCart'}
        type="button"
        value="newItem"
        onClick={() => {
          makeCookies();
          props.addToCart();
        }}
      >
        Add to cart
      </button>
    
  );
}
export default AddToCart;
