import Head from 'next/head';
import Calculator from '../components/calculator/calculator';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Compound Interest Calculator</title>
        <meta name="description" content="Compound Interest Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Compound Interest Calculator</h1>
        <Calculator />
      </main>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        main {
          text-align: center;
        }

        h1 {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
