import "../globals.css";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'


export default function App({ Component, pageProps }) {
    return (
        <>
        <Head>
        <link rel="icon" href="../public/logo.png" />
      </Head>
    <Component {...pageProps} />
    <Analytics/>
    </>
)}