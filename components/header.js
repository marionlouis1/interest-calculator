import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
  return (
    <header>
      <div className="logo">
        <p href="/">
          📈  Compound Interest Calculator
        </p>
      </div>
      <div className = "navbar">
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Bloc
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header;
