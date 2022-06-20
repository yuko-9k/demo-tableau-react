import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tableau from "./component/Tableau";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Example tableau" />
      </Head>

      <main className={styles.main}>
        <h1>EXAMPLE TABLEAU</h1>
        <Tableau />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
