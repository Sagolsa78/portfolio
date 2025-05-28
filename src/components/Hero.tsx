import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from "./Navbar";
import { useMenu } from "./MenuContext";

function Hero() {
  const words = ['Developer', 'Traveler', 'Photographer', 'Innovator'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { menuOpen } = useMenu();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white px-6 py-20 mt-20 lg:pt-30 lg:pb-30 md:mt-32 md:mb-32">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-300 ${
          menuOpen ? "mt-38" : "mt-0"
        }`}
      >
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="rounded-full overflow-hidden lg:ml-10 border-4 border-pink-500 w-52 h-52 md:w-96 md:h-1/2">
            <img
              src="/My _PhotoGraph.jpeg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center lg:ml-24 md:text-left md:pl-10 flex-1">
          <h1 className="lg:text-7xl text-4xl font-bold mb-4">
            Hi, I'm 
            <span className="bg-clip-text text-transparent bg-gradient-to-r ml-4 from-purple-500 to-pink-500">
               Mohit Sahani
            </span>
          </h1>

          <div className="text-2xl md:text-4xl mb-4">
            <span className="font-normal">I am a </span>
            <span className="inline-flex relative min-h-10 lg:min-w-[250px] min-w-[150px] align-middle">
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

          <p className="text-lg text-gray-400 mb-8 max-w-xl md:max-w-2xl mx-auto md:mx-0">
            Specializing in React, Node.js, and full-stack web development. Building real-time, scalable applications with a focus on intuitive UI/UX, WebSockets, and modern API integration.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-6">
            <a href="https://github.com/sagolsa78"><FaGithub /></a>
            <a href="https://x.com/sagolsa78"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/sahani78/"><CiLinkedin /></a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" onClick={(e) => scrollToSection(e, "#Projects")}>
              <button className="w-44 h-12 text-white  font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                Projects
              </button>
            </a>
            <a href="https://calendly.com/sahanimohit5ed/30min">
              <button className="w-52 h-12 border border-purple-500 text-gray-400 font-semibold rounded-full">
                Schedule A Meet
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
