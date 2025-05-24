import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function HomePage(){

    return(
        <div className="min-h-screen overflow-hidden">
            <Navbar/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>

        </div>
    )

}

export default HomePage;
