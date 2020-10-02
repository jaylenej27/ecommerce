import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/siteicon.png"></link>
      </Head>

      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  );
}
