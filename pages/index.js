import Head from 'next/head';
import Calculator from '../components/calculator/calculator';
import Header from '../components/header';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Compound Interest Calculator</title>
        <meta name="description" content="Compound Interest Calculator" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6256879694795014"
     crossorigin="anonymous"></script>
      </Head>
      <div>
        <Header />
      </div>
      <main>
        <h1>Compound Interest Calculator</h1>
          <Calculator />
      </main>
    </>
  );
}
