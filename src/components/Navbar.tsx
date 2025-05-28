import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon set you prefer
import { useMenu } from "./MenuContext";

export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({ behavior: "smooth" });
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const {menuOpen, setMenuOpen} = useMenu();
  // const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode')

  //   }
  //   else {
  //     document.body.classList.remove("dark-mode")
  //   }
  // })

  const navLinks = (
    <>
      <a
        href="#Home"
        onClick={(e) => scrollToSection(e, "#Home")}
        className="block py-2 px-4 hover:text-pink-400"
      >
        Home
      </a>
      <a
        href="#About"
        onClick={(e) => scrollToSection(e, "#About")}
        className="block py-2 px-4 hover:text-pink-400"
      >
        About
      </a>
      <a
        href="#Projects"
        onClick={(e) => scrollToSection(e, "#Projects")}
        className="block py-2 px-4 hover:text-pink-400"
      >
        Projects
      </a>
      <a
        href="#Contacts"
        onClick={(e) => scrollToSection(e, "#Contacts")}
        className="block py-2 px-4 hover:text-pink-400"
      >
        Contacts
      </a>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <a
          href="#Home"
          onClick={(e) => scrollToSection(e, "#Home")}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Mohit Sahani
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* <div className="pl-6">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox"
                checked={isDarkMode}
                className="sr-only peer"
                onClick={() => { setIsDarkMode(!isDarkMode) }} />

              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
            </label>







          </div> */}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`md:hidden bg-black/90  px-4 pb-4 text-white ${scrolled
          ? "bg-black/80 backdrop-blur-md  "
          : " backdrop-blur-md shadow-md"
        }`}>
          <nav className="flex flex-col space-y-2">{navLinks}</nav>
        </div>
      )}
    </header>
  );
}
