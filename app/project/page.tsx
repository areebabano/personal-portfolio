import Header from "../components/header";
import Footer from "../components/footer";
import ProjectCard from "../components/projectcard";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="mb-20">
        <Header />
      </div>

      <main className="flex-grow p-8">
        <h6 className="text-4xl font-bold mb-8 text-center">My Projects</h6>
        <div className="text-lg leading-relaxed mx-auto max-w-3xl">
          <p
            className="text-lg text-center paragraph-background mb-10 p-4 rounded-md transition-colors duration-300 hover:bg-black hover:text-darkgoldenrod"
            data-aos="fade-in"
          >
            Welcome to the portfolio of my projects, where you can explore a
            range of applications that showcase my skills and expertise in
            software development. Each project reflects different aspects of my
            work, from problem-solving to user interface design. I invite you to
            delve into these projects to see the innovative solutions and
            technical proficiency that I bring to my work. Whether you’re
            interested in practical tools, engaging games, or comprehensive
            systems, you’ll find a diverse array of projects here that
            illustrate my commitment to excellence and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="perspective-1000">
            <ProjectCard
              imageSrc="/calculator.jpg"
              title="Simple Calculator"
              description="A basic calculator to perform arithmetic operations."
              githubLink="https://github.com/areebabano/MathCraft-calculator"
              youtubeLink="https://www.youtube.com/watch?v=mjYZ0X9ljsc"
              linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7187059452502581248-pmXW?utm_source=share&utm_medium=member_desktop"
            />
          </div>
          <ProjectCard
            imageSrc="/guessing.jpg"
            title="Number Guessing Game"
            description="A fun game where you guess a randomly generated number."
            githubLink="https://github.com/areebabano/cli-number-guessing"
            youtubeLink="https://youtu.be/JRftA__h9OI"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7187120312822452225-Jc-Q?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/currency.webp"
            title="Currency Converter"
            description="A tool to convert between different currencies."
            githubLink="https://github.com/areebabano/Currency-Converter"
            youtubeLink="https://youtu.be/uz1LBiju_fQ"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7187159657499492352-KPNM?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/todo1.jpeg"
            title="To-Do List"
            description="A simple app to manage your daily tasks."
            githubLink="https://github.com/areebabano/Todo-list"
            youtubeLink="https://www.youtube.com/watch?v=HExj_flVi2A"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7188848144602812416-PzrE?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/atm.png"
            title="ATM Project"
            description="A simulation of an ATM machine for cash transactions."
            githubLink="https://github.com/areebabano/ATM-project"
            youtubeLink="https://youtu.be/aSV5h6P76Jg"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-softwareengineering-activity-7187129534486335488-fIoe?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/adventure.jpg"
            title="Adventure Game"
            description="An interactive text-based adventure game."
            githubLink="https://github.com/areebabano/adventure-game"
            youtubeLink="https://www.youtube.com/watch?v=UggxEGN5hww"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7191153184881418240-lONZ?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/quiz.webp"
            title="Quiz"
            description="A quiz application with multiple-choice questions."
            githubLink="https://github.com/areebabano/quiz-node-project"
            youtubeLink="https://www.youtube.com/watch?v=eJkDTtGdXVQ"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7191918599144452096-lrWL?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/timer.jpg"
            title="Countdown Timer"
            description="A simple countdown timer for various uses."
            githubLink="https://github.com/areebabano/countdown-timer"
            youtubeLink="https://youtu.be/f0i4fyUUArQ"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7193956420969484288-4ckT?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/counter.jpg"
            title="Word Counter"
            description="A tool to count the number of words in a text."
            githubLink="https://github.com/areebabano/word_counter"
            youtubeLink="https://youtu.be/cYV44snqdGc"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7187403652607737856-qRQl?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/smt.png"
            title="Student Management System"
            description="An app to manage student records and information."
            githubLink="https://github.com/areebabano/student-management-system"
            youtubeLink="https://youtu.be/ExCmii0Ut0Q"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7190670504775573504-QL6V?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/oop.jpg"
            title="OOP"
            description="A demonstration of Object-Oriented Programming concepts."
            githubLink="https://github.com/areebabano/object-oriented-programming-oop-"
            youtubeLink="https://youtu.be/436GySYXq2I"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7195135722880729088-9KeZ?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/myBank.jpeg"
            title="OOP MyBank"
            description="A banking application built with OOP principles."
            githubLink="https://github.com/areebabano/oop-myBank"
            youtubeLink="https://www.youtube.com/watch?v=P2qBzFFoLWM"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7195888279488004097-aum_?utm_source=share&utm_medium=member_desktop"
          />
          <ProjectCard
            imageSrc="/pfm.png"
            title="Personal Finance Manager"
            description="An application to manage personal finances and track expenses."
            githubLink="https://github.com/areebabano/persnol-finance-manager-"
            youtubeLink="https://youtu.be/-mujdaJF3a0"
            linkedinLink="https://www.linkedin.com/posts/areeba-bano-9249752b7_typescript-webdevelopment-frontend-activity-7217434492293017602-mU2w?utm_source=share&utm_medium=member_desktop"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
