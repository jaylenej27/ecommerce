import Head from 'next/head';
import Layout from '../components/Layout';

export default function Checkout() {
  return (
    <>
      <Layout>
        <Head>Checkout</Head>
        <div className="maincontainer">
          Can you see me?
          <div className="leftside">
            <form>
              {/* onSubmit(submit) */}
              <label htmlFor="First Name"></label>
              <input
                id="First Name"
                name="First Name"
                placeholder="First Name"
              ></input>
              <label htmlFor="Last Name"></label>
              <input
                id="Last Name"
                name="Last Name"
                placeholder="Last Name"
              ></input>
              <label htmlFor="Email"></label>
              <input
                id="Email"
                name="Email"
                placeholder="michelleobama@gmail.com"
                type="email"
              ></input>
              <label htmlFor="Phone"></label>
              <input
                id="Phone"
                name="Phone"
                placeholder="+00 123 456 7788"
              ></input>
              <label htmlFor="Address"></label>
              <input
                id="Address"
                name="Address"
                placeholder="Street Name, Building number, Apt number"
              ></input>
              <label htmlFor="City"></label>
              <input id="City" name="City" placeholder="City"></input>
              <label htmlFor="Zip Code"></label>
              <input id="Zip" name="Zip" placeholder="1060"></input>
            </form>
          </div>
        </div>
      </Layout>
      <style jsx>
        {`
          .maincontainer {
            max-width: 100%;
            text-align: center;
            justify-content: space-around;
            display: flex;
            position: relative;
            margin-top: 25vh;
          }

          .leftside {
            border: 3px #1b1b1b;
          }
        `}
      </style>
    </>
  );
}
