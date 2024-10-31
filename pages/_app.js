import { Component } from "react"
import styles from '../styles/global.css';

export default function MyApp({ Component, pageProps}) {
    return <Component {...pageProps}/>
}