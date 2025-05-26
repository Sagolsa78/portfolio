import { useEffect, useState } from "react";



export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, herf: string) => {
  e.preventDefault()
  const targetId = herf.replace("#", "")
  const elem = document.getElementById(targetId)
  elem?.scrollIntoView({ behavior: "smooth" })

}


export function Navbar() {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode')

  //   }
  //   else {
  //     document.body.classList.remove("dark-mode")
  //   }
  // })







  return (
    <div className={` fixed top-0 right-0 left-0 z-50  h-15 justify-between flex  text-white transition-all duration-100 ${scrolled ? "bg-gray bg-black/80  backdrop-blur-md  text-white" : "bg-transparent "} `}>
      <div className="container mx-auto px-4 flex justify-between">
        <a href="Home" onClick={(e) => scrollToSection(e, "#Home")} className=" text-2xl p-4 font-semibold font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500" >
          Mohit Sahani
        </a>
        <div className="justify-between  flex p-4 pr-20">
          <div className=" pl-6 pr-4">
            <a href="Home" onClick={(e) => scrollToSection(e, "#Home")}>Home</a>
          </div>
          <div className="pl-6 pr-4">
            <a href="About" onClick={(e) => scrollToSection(e, "#About")}>About</a>
          </div>
          <div className="pl-6 pr-4">
            <a href="Projects" onClick={(e) => scrollToSection(e, "#Projects")}>Projects</a>
          </div>
          <div className="pl-6 pr-4">
            <a href="Contacts" onClick={(e) => scrollToSection(e, "#Contacts")}>Contacts</a>
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
        </div>

      </div>
    </div>
  )
}



