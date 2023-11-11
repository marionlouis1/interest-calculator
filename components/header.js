import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-black py-5 flex items-center justify-between">
      <div className="logo text-xl pl-4">
        <Link href="/">
          📈 Compound Interest Calculator
        </Link>
      </div>
      <div className="navbar">
        <nav>
          <ul className="flex space-x-6 pr-2/12">
            <li>
              <Link href="/" className="text-black font-bold hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/blog" className="text-black font-bold hover:text-blue-500">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
