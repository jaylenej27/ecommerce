import Head from 'next/head';
import Layout from '../components/Layout';
import cookie from 'js-cookie';
import React, { useState } from 'react';
import nextCookies from 'next-cookies';
import Link from 'next/link';

 
export default function Checkout() {
  const [input, setInput] = useState('');

  function buy() {
    cookie.remove('cart');
    cookie.remove('total');
  }

  const regexText = /[a-zA-Z]/g;
  const regexNumber = /[0-9/]/g;

  function checksTypeText(e) {
    if (e.target.value.match(regexText)) {
      setInput(e.target.value);
      // console.log(input);
    } else {
      e.target.value = '';
    }
  }

  function checksTypeNumber(e) {
    if (e.target.value.match(regexNumber)) {
      setInput(e.target.value);
      // console.log(input);
    } else {
      e.target.value = '';
    }
  }

  return (
    <div>
      <Head>
        <title>Checkout Page</title>
        <link rel="icon" href="/siteicon.png" />
      </Head>
      <Layout>

      <div className="container">
        <h1>Contact information and payment</h1>
        <div className="wholeBox">
          <div className="contactInfo">
            <h3>Shipping address</h3>
            <span>
              <label htmlFor="name">Full name</label>
              <input
                data-cy="full-name"
                type="text"
                id="name"
                placeholder="Michelle Obama"
                onChange={checksTypeText}
              ></input>
            </span>
            <span>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="michelleobama@gmail.com"
              ></input>
            </span>
            <span>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Burggasse 123"
              ></input>
            </span>
            <span>
              <label htmlFor="zip" >Zip-code</label>
              <input
                id="zip"
                placeholder="1060"
                type="text"
                maxLength="8"
                onChange={checksTypeNumber}
              ></input>
            </span>
            <span>
              <label htmlFor="city">City</label>
              <input id="city" placeholder="Wien" type="text"></input>
            </span>
          </div>
          <div className="payment">
            <h3>Payment info</h3>
            <span>
              <label htmlFor="namecard">Name on card</label>
              <input
                id="namecard"
                type="text"
                placeholder="Alenio B. Hasslacherio"
                onChange={checksTypeText}
              ></input>
            </span>
            <span>
              <label htmlFor="cardnumber">Credit card number</label>
              <input
                id="cardnumber"
                type="text"
                placeholder="1234-5678-9000-1111"
                maxLength="16"
                onChange={checksTypeNumber}
              ></input>
            </span>
            <span>
              <label htmlFor="expdate">Expiry date</label>
              <input
                id="expdate"
                type="text"
                placeholder="12/20"
                onChange={checksTypeNumber}
                maxLength="5"
              ></input>
            </span>
            <span>
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="number"
                placeholder="123"
                onChange={checksTypeNumber}
              ></input>
            </span>
          </div>
        </div>

        <p className="total">
          Total price of items in cart: {cookie.getJSON('total')}€
        </p>
        {!input ? (
          ''
        ) : (
          <Link href="/thx">
            <a data-cy="buy-button">
              <button onClick={buy}>BUY!</button>
            </a>
          </Link>
        )}
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
          display: flex;
          flex-direction: column;
        }
        .wholeBox {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          margin-top: -20px;
        }
        .contactInfo,
        .payment {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .contactInfo > *,
        .payment > * {
          padding: 10px;
        }
        .cards {
          margin-top: -40px;
        }
        input {
          padding: 5px;
          border-radius: 5px;
        }
        input[id='cvv'],
        input[id='zip'],
        input[id='expdate'] {
          width: 70px;
        }
        span {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 15px;
        }
        span label {
          text-align: right;
        }
        img {
          height: 30px;
        }
        img:last-of-type {
          margin-left: 3px;
        }
        a {
          align-self: flex-end;
        }
        .total {
          align-self: flex-end;
        }
        button {
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
        }
        button:hover {
          transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          background-color: #82afba;
        }
        }
      `}</style>
    </div>
  );
}
// export async function getServerSideProps(context) {
//   const { cart, total } = nextCookies(context);

//   console.log(total);
//   return {
//     props: {
//       ...(cart ? { cart: cart } : undefined),
//       total,
//     },
//   };
// }
 


