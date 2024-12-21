import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="bg-black w-full fixed top-0 left-0 z-50">
    <div className="container flex justify-start items-center h-20">
      <div className="flex items-center">
      <Link href="/">
        <Image
          src="/portfolioLogo.jpg"
          alt="Areeba Bano logo"
          height={90}
          width={90}
          className="cursor-pointer" 
        />
      </Link>
      </div>
      <Navbar/>
    </div>
  </header>
  );
}

