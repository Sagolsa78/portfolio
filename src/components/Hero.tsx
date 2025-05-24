import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from "react";





import  { useEffect, useState } from "react";

import { motion, AnimatePresence } from 'framer-motion';

function Hero() {

    const words = ['Developer', 'Traveler', 'Photographer', 'Innovator'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [words.length])


    const ProjectsRef =useRef(null);


    return (

        <div className="mx-auto container  px-6 py-20 mb-50 mt-50 flex " >
            <div className="flex">
                <div className="aspect-square rounded-full text-amber-600 overflow-hidden border-6 border-b-fuchsia-600 ">
                    <img src="/src/assets/sahani_image.jpeg" alt="profile _image" className="h-full w-full" />
                </div>
                <div className="pl-10">
                    <div className="  pl-30">
                        <h1 className="text-5xl md:text-7xl mb-4 font-bold">
                            Hi, I'am
                            <span className="pl-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Mohit Sahani</span>

                        </h1>

                        <div className="text-left text-4xl mb-4 align-baseline ">
                            <span className=" font-normal">I am a </span>
                            <span className="inline-flex relative min-w-[250px] min-h-8 vertical-align-middle ">
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
                        <div>
                            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                                Specializing in React, Node.js, and full-stack web development. Building real-time, scalable applications with a focus on intuitive UI/UX, WebSockets, and modern API integration.</p>
                        </div>
                        <div className="mb-8 text-2xl lg: flex gap-6 
                        ">
                            <a href="https://github.com/sagolsa78"><FaGithub className="" /></a>
                            <a href="https://x.com/sagolsa78"> <FaXTwitter /></a>
                            <a href="https://www.linkedin.com/in/sahani78/ "> <CiLinkedin /></a>
                        </div>
                        <div className="flex flex-col-2  ">
                            <a href="#projects" className=""> <button className="text-xl font-semibold item-center w-44 h-12  rounded-full text-white  bg-gradient-to-r from-purple-500 to-pink-500">
                                Projects


                            </button></a>
                            <a href="" className="pl-4"><button className="text-xl flex     pl-8  items-center font-bold item-center w-62 h-12  rounded-full text-gray-500  border-4    border-purple-500 ">
                                {/* <SlCalender className=""/> */}
                                Schedule A Meet


                            </button></a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Hero;
