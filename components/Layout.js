import Head from 'next/head';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/siteicon.png"></link>
      </Head>

      <Header />

      <main>{props.children}</main>

      <footer>Links will be here</footer>
    </>
  );
}
