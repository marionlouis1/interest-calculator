import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white text-black py-5">
      <div className="container mx-auto flex justify-between">
        <Link  href="nextjs.org" className="text-lg">
          Powered by <u>Next.js</u>
        </Link>
        <Link href="https://twitter.com/louismrn0" className="text-lg">
          Created By <u>LM</u>.
        </Link>
      </div>
    </div>
  );
}

export default Footer;
