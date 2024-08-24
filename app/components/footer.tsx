import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-style py-8 bg-black text-white">
      <div className="container mx-auto text-center md:text-left">
        {/* Navigation */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link href="/" className="hover:underline text-darkgoldenrod">
            <b><i>Home</i></b>
          </Link>
          <Link href="/about" className="hover:underline">
            <b><i>About</i></b>
          </Link>
          <Link href="/project" className="hover:underline">
            <b><i>Project</i></b>
          </Link>
          <Link href="/contact" className="hover:underline">
           <b><i> Contact</i></b>
          </Link>
        </div>
        
        {/* Profile Image and Connect with Me */}
        <div className="text-center mt-4">
          {/* Profile Image */}
          <div className="image-style flex justify-center mb-6">
            <Image
              id="my-image"
              src="/my-image.jpg"
              alt="Areeba Bano, a software developer"
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
          
          {/* Connect with Me */}
          <h5 className="text-lg font-semibold mb-6 animate-bounce">Connect with me:</h5>
          <div className="flex justify-center space-x-4 mb-6 animate-pulse">
            <a
              href="https://www.facebook.com/profile.php?id=100072877617416&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Image src="/facebook.png" alt="Facebook" height={24} width={24} />
            </a>
            <a
              href="https://github.com/areebabano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <Image src="/git.png" alt="Twitter" height={24} width={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/areeba-bano-9249752b7/?trk=public-profile-join-page"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Image src="/linkedin2.png" alt="LinkedIn" height={24} width={24} />
            </a>
            <a
              href="https://www.youtube.com/@CodeVerse-vk9fo/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <Image src="/youtube.png" alt="YouTube" height={24} width={24} />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=9hs10rg71n48&utm_content=r2vbwcj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <Image src="/insta.png" alt="Instagram" height={24} width={24} />
            </a>
          </div >

          <p className="text-sm">&copy; {new Date().getFullYear()} Areeba Bano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

