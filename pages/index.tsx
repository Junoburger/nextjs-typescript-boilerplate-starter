import Head from 'next/head';
// import Image from 'next/image';
import styled from 'styled-components';

import BaseLayout from '../components/layout/BaseLayout';
import styles from '../styles/Home.module.css';



export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Starting grounds</title>
        <meta name="description" content="Generated" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <main className={styles.main}>

        </main>
      </BaseLayout>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
