import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Counter from "../components/Counter";
import SearchBar from '../components/SearchBar';
import Paragraph from '../components/Paragraph';


export default function Home() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Joshua Wilcox welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Counter bgColor='purple'/>
      <Counter incrementBy={2} bgColor='yellow'/>

      <Paragraph/>

      <SearchBar/>
    </div>
  );
}