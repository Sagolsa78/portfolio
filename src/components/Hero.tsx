import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import {scrollToSection } from "./Navbar";
import { useMenu } from "./MenuContext";




function Hero() {
  const words = ['Developer', 'Traveler', 'Photographer', 'Innovator'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const {menuOpen}=useMenu();


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-black text-white px-6 py-20 mt-10 

        }`}>
      <div className={`container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 flex-1 transition-all duration-300 ${menuOpen ? "mt-38" : "mt-0" }`}>
        
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Mohit Sahani</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-4">
            I am a{" "}
            <span className="inline-flex relative min-h-10 min-w-[150px] align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
            Specializing in React, Node.js, and full-stack web development. Building real-time, scalable applications with a focus on intuitive UI/UX, WebSockets, and modern API integration.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-6">
            <a href="https://github.com/sagolsa78"><FaGithub /></a>
            <a href="https://x.com/sagolsa78"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/sahani78/"><CiLinkedin /></a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" onClick={(e) => scrollToSection(e, "#Projects")}>
              <button className="w-44 h-12 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                Projects
              </button>
            </a>
            <a href="https://calendly.com/sahanimohit5ed/30min">
              <button className="w-52 h-12 border border-purple-500 text-gray-300 font-semibold rounded-full">
                Schedule A Meet
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-pink-500 w-52 h-52 md:w-96 md:h-96">
            <img
              src="/My _PhotoGraph.jpeg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
