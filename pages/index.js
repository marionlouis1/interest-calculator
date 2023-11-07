import Head from 'next/head';
import Calculator from '../components/calculator/calculator';
import Header from '../components/header';
import { Analytics } from '@vercel/analytics/React';
import Footer from '../components/footer';


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Compound Interest Calculator</title>
        <meta name="description" content="Compound Interest Calculator" />
        <link rel="icon" href="../public/logo.png" />
        {/* Google Adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6256879694795014"
     crossorigin="anonymous"></script>
      </Head>
      <div>
        <Header />
      </div>
      <main>
        <h1>Compound Interest Calculator</h1>
        <div className="tool-wrapper">
          <Calculator />
        </div>
        <Analytics/>
      </main>
      <Footer/>
    </>
  );
}
