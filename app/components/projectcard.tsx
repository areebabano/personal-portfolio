"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink?: string;
  youtubeLink?: string;
  linkedinLink?: string;
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  githubLink,
  youtubeLink,
  linkedinLink,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div
      className="relative w-80 h-80 perspective-1000"
      data-aos="fade-up" 
      data-aos-offset="100" 
      data-aos-delay="400" 
      data-aos-duration="1000" 
    >
      <div
        className={`relative w-80 h-80 transform transition-transform duration-500 card-container${
          isFlipped ? "rotate-y-180" : ""
        }group`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 bg-white shadow-lg rounded-lg mb-4 border-4 border-transparent transition-opacity duration-300 ${
            isFlipped ? "opacity-0" : "opacity-100"
          } group-hover:border-yellow-800`}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={256}
            height={320}
            className="card-image object-cover w-full h-fullrounded-lg"
          />
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 bg-black text-white p-4 rounded-lg transform rotate-y-180 transition-opacity duration-300 ${
            isFlipped ? "opacity-100" : "opacity-80"
          } group-hover:border-yellow-800`}
        >
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4 animate-fadeIn">{description}</p>
          <div className="flex space-x-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
            )}
            {youtubeLink && (
              <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600"
              >
                <FaYoutube size={24} />
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}




