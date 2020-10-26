import Head from 'next/head';
import Layout from '../components/Layout';

import React from 'react';

export default function thx() {
  return (
    <div>
      <Head>
        <title>Thank you </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
      <div className="container">
        <h1>Thank you for you purchase! </h1>
        <h2>Our team will contact you shortly</h2>
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
      `}</style>
    </div>
  );
}