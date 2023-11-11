const Header = () => {
  return (
    <header className="bg-white text-black py-5 flex items-center justify-between">
      <div className="logo text-xl pl-4">
        <a href="/">
          📈 Compound Interest Calculator
        </a>
      </div>
      <div className="navbar">
        <nav>
          <ul className="flex space-x-6 pr-2/12">
            <li>
              <a href="/" className="text-black font-bold hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/blog" className="text-black font-bold hover:text-blue-500">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
