import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Applejacks Shoes</title>
      </Head>

      <Layout>
        <main></main>
      </Layout>
    </div>
  );
}
