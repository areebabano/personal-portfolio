"use client"
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube,FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact page for portfolio" />
      </Head>
      <div className="max-w-4xl mx-auto p-4 mt-20 bg-black text-darkgoldenrod">
        <Header />
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-4">
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to get in touch.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">📍 Location: Karachi, Pakistan</p>
          <p className="mb-2">✉️ Email: areebabano986@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/areebabano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkgoldenrod hover:text-gray"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/areeba-bano-9249752b7/?trk=public-profile-join-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkgoldenrod hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100072877617416&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkgoldenrod hover:text-blue-700"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@CodeVerse-vk9fo/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkgoldenrod hover:text-red-600"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=9hs10rg71n48&utm_content=r2vbwcj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkgoldenrod hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-darkgoldenrod">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input mt-1 block w-full px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-darkgoldenrod">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input mt-1 block w-full px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-darkgoldenrod">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-textarea mt-1 block w-full px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="form-button w-full py-2 px-4"
          >
            Send Message
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-500">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500">
            There was an error sending your message.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}
