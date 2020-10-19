/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout';
import Head from 'next/head';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: space-around;
  display: flex;
  position: relative;
  margin-top: 25vh;
  flex-direction: column;

  img {
    height: 250px;
  }

  ul {
    li {
      list-style: none;
    }
  }
`;

export default function ShipOrReturn(props) {
  return (
    <>
      <Layout>
        <Head>
          <title>All products</title>
        </Head>
        <main>
          <div css={centeredContainerStyles}>
            <div className="intro">
              <img src="/7085.jpg" alt="Courier handing package to customer" />
              <h1>Shipping fulfillment is based in Vienna AT</h1>
            </div>
            <div className="styleddiv">
              <h2>
                DHL Express Shipping: Prices are based off the delivery address.{' '}
              </h2>
              <p>
                We have 4 Different shipping Zones (Vienna, Austria/EU/Zone 1,
                Zone 2, Zone 3/Rest Of world) Free pickup in Vienna FREE
                shipping to EU Zone 2 (Includes US/Canada) €15 per order Zone 3
                (includes China & Korea) €25 up to 10kilo, €75 over 10kilo If
                you have further questions, Contact us
              </p>

              <p>
                Once you have placed your order you will receive an order
                confirmation. Orders are then processed within 5 business days,
                once payment has been received. Once orders are processed your
                items will be shipped and you will be notified with shipping
                confirmation.
              </p>

              <p>
                Important: Please note that for deliveries outside of the EU,
                the recipient is responsible for any possible taxes, fees, or
                customs that may accrue. We unfortunately cannot control or
                prevent any delays within customs. If you refuse duties or fees
                on your package and choose to have it sent back to us, any
                handling fees charged to our account to retrieve the package
                will be deducted from your refund. Damages incurred during
                transport must be immediately reported to the shipping company
                AND Applejacks upon receipt of goods.
              </p>
            </div>
            <div className="styleddiv">
              <h2>A return or exchange is possible when…</h2>
              <ul>
                <li>The items are unworn</li>
                <li>The items are in their packaging</li>
                <li>Lining has not been removed (if applicable)</li>
                <li>
                  The items are returned to us within 30 days from time of
                  receipt
                </li>
                <li>
                  The completed Return/Exchange form is in the package, with
                  information on the Order No., ­reason for return, and whether
                  an exchange or refund is requested
                </li>
              </ul>
              <section>
                Additional information: Return costs (shipping) is paid by the
                customer Sale items (items purchased at a reduced price) cannot
                be returned or exchanged If you paid for your order via bank
                transfer, we will need your banking information in order to
                initiate a return transfer (if applicable) The delivery cost
                that was originally paid is non-refundable unless the goods are
                faulty. If you are returning items because you have changed your
                mind, this will be at your own cost, and we cannot refund your
                postage. Exchange / Return Form This form provides us with the
                information we need to process your return or exchange. This
                form must be filled out and enclosed in the return package.
                Without this form, your return or exchange cannot be processed.
                Refunds We will aim to process refunds within 5 days of
                receiving your returned order. We will e-mail you and let you
                know when we have received and processed your refund. After
                you’ve received this email, please allow an additional 5-10
                working days for the refund to be credited to your account. The
                time in which it takes for your account to be credited will
                depend on which bank or card issuer you’re with. Please note we
                have no control over this. We will credit your refund by the
                same method you used when you placed your order. All returns
                will be processed within 30 days. If you are sending something
                back to us because we have made an error we will ask for a copy
                of your postage receipt – please email this to us: info @
                applejacksshoes.com ****WE HAVE DONE OUR BEST TO DISPLAY AS
                ACCURATELY AS POSSIBLE THE COLORS OF THE PRODUCTS SHOWN ON OUR
                WEBSITE. HOWEVER, BECAUSE THE COLORS YOU SEE WILL DEPEND ON YOUR
                MONITOR, WE CANNOT GUARANTEE THAT YOUR MONITOR’S DISPLAY OF ANY
                COLOR WILL BE ACCURATE***
              </section>
            </div>
          </div>
        </main>
      </Layout>
      <style jsx>{`
        .intro {
          margin: auto;
          border-bottom: 3px solid #82afba;
        }

        .styleddiv {
          display: flex;
          flex-direction: column;
          margin: auto;
          max-width: 75%;
          border-bottom: 3px solid #82afba;
        }
      `}</style>
    </>
  );
}
