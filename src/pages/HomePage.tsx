import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { MenuProvider } from "../components/MenuContext";
import { Navbar } from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function HomePage() {

    return (
        <div id="Home" className=" bg-black min-h-screen overflow-hidden">
            <MenuProvider>
                <Navbar />
                <Hero />
            </MenuProvider>
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />

        </div>
    )

}

export default HomePage;
