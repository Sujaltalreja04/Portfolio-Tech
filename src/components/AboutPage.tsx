"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { TechStackButton } from "./TechStackButton";
import reactLogo from "../../public/assets/react.png";
import javascriptLogo from "../../public/assets/javascript.png";
import tailwindLogo from "../../public/assets/tailwind.png";
import nodejsLogo from "../../public/assets/nodejs.png";
import expressLogo from "../../public/assets/express.png";
import restapiLogo from "../../public/assets/restapi.png";
import mongodbLogo from "../../public/assets/mongodb.png";
import mongooseLogo from "../../public/assets/mongoose.png";
import nextjsLogo from "../../public/assets/nextjs.png";
import typescriptLogo from "../../public/assets/typescript.png";
import materialuiLogo from "../../public/assets/materialui.png";
import cppLogo from "../../public/assets/cpp.png";
import htmlLogo from "../../public/assets/html.png";
import cssLogo from "../../public/assets/css.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import art from "../../public/assets/art.webp";
import art3 from "../../public/assets/art-3.webp";
import art4 from "../../public/assets/art-4.webp";
import art6 from "../../public/assets/art-6.webp";
import art7 from "../../public/assets/art-7.webp";
import blog1 from "../../public/assets/blog1.webp";
import blog2 from "../../public/assets/blog2.webp";
import Blog3 from "../../public/assets/Blog3.webp";
import { BlogsCards } from "./BlogsCards";
import { ServiceCards } from "./ServiceCards";

interface LazyImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
}

const LazyImage = ({ src, alt, width }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref}>
      {inView && <Image src={src} alt={alt} width={width} loading="lazy" />}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-28">
        <LazyImage src={art4} alt="about" width={1000} />
      </div>

      <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
        <div
          className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
          id="about"
        >
          🌌 About 🦄
        </div>
        <br />
        <br />
        <div className="w-[90%] sm:w-[80%] md:w-[80%] xl:w-[60%] my-14 text-2xl z-10">
          Hello, folks! I'm a{" "}
          <span className="text-green-300">Full-Stack Web Developer,Data analyst,Business analyst,Data scientist</span> with
          a passion for the MERN stack,Python,Numpy,Panda,Powerbi. Mern stack and Data analysis is at the heart of my work,
          and I've spent the last 1.5 years diving deep into web development,Data analysis
          creating projects I'm really proud of. Freelancing has also been a big
          part of my journey, giving me the chance to work with various clients
          and learn from each experience.
          <br />
          <br />
          <br />
          <div className="flex w-full flex-wrap mt-8">
            <TechStackButton title="React.Js" logo={reactLogo} />
            <TechStackButton title="JavaScript" logo={javascriptLogo} />
            <TechStackButton title="TailwindCSS" logo={tailwindLogo} />
            <TechStackButton title="Node.Js" logo={nodejsLogo} />
            <TechStackButton title="Express.js" logo={expressLogo} />
            <TechStackButton title="REST APIs" logo={restapiLogo} />
            <TechStackButton title="MongoDB" logo={mongodbLogo} />
            <TechStackButton title="Mongoose" logo={mongooseLogo} />
            <TechStackButton title="Next.js" logo={nextjsLogo} />
            <TechStackButton title="TypeScript" logo={typescriptLogo} />
            <TechStackButton title="Material-UI" logo={materialuiLogo} />
            <TechStackButton title="C++" logo={cppLogo} />
            <TechStackButton title="HTML5" logo={htmlLogo} />
            <TechStackButton title="CSS3" logo={cssLogo} />
          </div>
          <br />
          <br />
          <br />
          <div>
            <span className="sm:text-4xl text-[30px] font-bold text-green-300">
              ✨ Sujal K. Talreja
            </span>
            <br />
            <br /> <span className="font-bold text-purple-300">
              Currently:
            </span>{" "}
            Final Year Computer Science Student <br />
            <br />
            <span className="font-bold text-purple-300">Branch:</span> Computer
            Science  <br />
            <br />
            <span className="font-bold text-purple-300">College:</span> Prof.
            Ganpat University
            <br />
            <br />
            <span className="font-bold text-purple-300">
              Graduation Year:
            </span>{" "}
            2025
            <br />
            <br />
            <span className="font-bold text-purple-300">Address:</span>{" "}
            Ahmedabad ,Gujarat, India
            <br />
            <br />
            <br />
            <br />
            <div
              className="w-full flex justify-center items-center my-28"
              id="about"
            >
              <LazyImage src={art6} alt="about" width={1000} />
            </div>
            <span className="font-bold text-green-300">
              🎗️ As a student of computer science, I specialize in:
            </span>
            <br />
            <br />
            -Full Stack Web Development
            <br /> -Data science, analyst <br />
            -Business analyst
            <br /> -Python or power bi developer
            <br />
            <br /> I completed an{" "}
            <Link
              href="https://i.ibb.co/mFqkCyk/Screenshot-2024-07-04-193214.png"
              className="text-green-300 underline"
            >
              Internship
            </Link>{" "}
           At Cognorise Infotech I worked as power bi Developer 
           I made various data sets dashboards In this 1 month internship i learened a 
           lot regarding power bi,data analysis and vizualization.
            <br /> <br />I currently doing internship a{" "}
            <Link
              href="https://i.ibb.co/pd6qRr4/Screenshot-2024-07-04-193849.png"
              className="text-green-300 underline"
            >
              I Currently working
            </Link>{" "}
            At YBI Foundation i am working as a data scientist intern my main work 
            is to analyze data make dashboards through power bi in this 6 month internship
            i am eager to learn something new about data analyze.
          </div>
          <br />
          <br />
          <br />
          🙌 So, let's connect and share a few laughs while we navigate the tech
          world together!
          <br />
          <br />
          ➡️ I am looking for opportunities in the fields of web development, software development,
          data analyst, business analyst, python developer, ai/ml engeneer, data scientist.
          <br />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art7} alt="about" width={1000} />
      </div>

      {/* Blogs */}
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="blogs"
      >
        
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art3} alt="about" width={1000} />
      </div>
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="services"
      >
        🌌 Services 🦄
      </div>
      <div className="relative flex justify-center w-full my-8">
        <div className="flex flex-wrap justify-around items-center xl:w-[70%] sm:w-[90%]">
          <ServiceCards
            title="Mern stack development"
            description="Creating stellar user interfaces and web experiences using the latest technologies."
            emoji="💻"
          />
          <ServiceCards
            title="Data science"
            description="Developing robust, scalable machine learning models according to different task and projects."
            emoji="📡"
          />
          <ServiceCards
            title="Business analysis"
            description="Created various dashboard to vizualize data present data in various graph"
            emoji="📲"
          />
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art} alt="about" width={1000} />
      </div>
    </>
  );
};

export default AboutPage;
