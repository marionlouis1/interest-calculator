import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  const notifyCrypto = () => toast.info("Incoming soon !!!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon:"🚀",
  }); 

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    
      />

    <header className="bg-white text-black py-5 flex items-center justify-between">
      <div className="logo text-xl pl-4">
        <Link href="/">
          📈 Compound Interest Calculator
        </Link>
      </div>
      <div className="navbar w-full">
        <nav>
          <ul className="flex space-x-6 pr-2/12 items-center justify-end">
            <li>
              <Link href="/" className="text-black font-bold hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/blog" className="text-black font-bold hover:text-blue-500">Blog</Link>
            </li>
            <li>
              <Link href="/stocks" className="text-black font-bold hover:text-blue-500">Stock market</Link>
            </li>
            <li>
              <Link href="/bonds" className="text-black font-bold hover:text-blue-500">Bonds</Link>
            </li>
            <li>
            <button className ="text-black font-bold hover:text-blue-500 "onClick={notifyCrypto}>Crypto</button>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
  );
}

export default Header;
