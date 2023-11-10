
const Header = () => {
  return (
    <header className="bg-white text-black py-5 flex">
      <div className="logo w-1/3 text-xl sp">
        <a href="/">
          📈 Compound Interest Calculator
        </a>
      </div>
      <div className="navbar w-2/3 flex justify-center">
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
                <a href="/" className="text-black font-bold hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/blog "className="text-black font-bold hover:text-blue-500">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
