import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./project/page";


export default function Home() {
  return (
    <div className="bg-black text-white">
    <div className="mb-8">
      <Header/>
    </div>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <section className="hero flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
          <div className="hero-content flex-1 md:mr-8 mb-20">
            <h2 className="ml-6 text-2xl font-bold">Hello, I am</h2>
            <h1 className="ml-6 text-5xl font-extrabold mt-4">AREEBA BANO</h1>
            <p className="paragraph-style mt-6 ml-6 text-lg">
              A Software Developer with a passion for crafting innovative
              solutions. My journey in programming began a year ago, and it has
              been a life-changing adventure. Through dedication and
              perseverance, I&apos;ve achieved notable milestones and continue to
              strive for excellence. Programming has not only challenged me but
              also instilled a sense of purpose and hope. I&apos;m excited to see
              where this journey takes me and how I can harness my skills to
              drive positive change.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-20">
            <Image
              id="my-image"
              src="/my-image.jpg"
              alt="Areeba Bano, a software developer"
              height={240}
              width={240}
              className="object-cover mt-[-110px] md:mr-8 mb-15 rounded-full my-image"
            />
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}




