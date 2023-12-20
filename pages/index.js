import Head from 'next/head';
import Calculator from '../components/calculator/calculator';
import Header from '../components/header';
import Footer from '../components/footer';



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Compound Interest Calculator</title>
        <meta name="description" content="Compound Interest Calculator" />
        {/* Google Adsense 
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6256879694795014"
     crossorigin="anonymous"></script>
     */}
      </Head>
      
      <div>
        <Header />
      </div>
      <main>
        <h1 className=" bg-white text-black text-center">Compound Interest Calculator</h1>
        <div className="tool-wrapper">
          <Calculator />
        </div>
      </main>
      <Footer/>
    </>
  )
}
