import '../styles/globals.css';

// import { NextPage } from 'next';

// type Props = {
//   Component: NextPage,
//   pageProps: any,
// }

// function MyApp(
//   { Component, pageProps }: Props,
// ) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
