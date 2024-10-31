import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

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

      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment} >Increase</button>
        <button onClick={decrement} >Decrease</button>
      </div>
    </div>
  );
}