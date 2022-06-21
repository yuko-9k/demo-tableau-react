import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tableau from "./component/Tableau";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tableau-Demo</title>
        <meta name="description" content="Example tableau" />
        <meta property="og:title" content="My Tableau" />
        <meta
          property="og:description"
          content="Try to seo Tableau!"
        />
        <meta property="og:url" content="https://black-wealth-data-center.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>EXAMPLE TABLEAU</h1>
        <Tableau />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
