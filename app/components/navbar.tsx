import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="flex justify-end items-center space-x-8">
        <Link href="/" className="group relative">
          <Image
            src="/home.jpg"
            alt="home icon"
            height={50}
            width={50}
            className="inline-block"
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-14 text-sm text-darkgoldenrod opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <b><i>Home</i></b>
          </span>
        </Link>
        <Link href="/about" className="group relative">
          <Image
            src="/about.jpg"
            alt="about icon"
            height={60}
            width={60}
            className="inline-block"
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-14 text-sm text-darkgoldenrod opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <b><i>About</i></b>
          </span>
        </Link>
        <Link href="/project" className="group relative">
          <Image
            src="/project2.jpg"
            alt="project icon"
            height={60}
            width={60}
            className="inline-block"
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-14 text-sm text-darkgoldenrod opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <b><i>Project</i></b>
          </span>
        </Link>
        <Link href="/contact" className="group relative">
          <Image
            src="/contact.jpg"
            alt="contact icon"
            height={60}
            width={60}
            className="inline-block"
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-14 text-sm text-darkgoldenrod opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <b><i>Contact</i></b>
          </span>
        </Link>
      </nav>
    </div>
  );
}

