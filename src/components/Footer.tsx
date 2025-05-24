import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";



function Footer() {
    return (
        <>
            <footer className="py-8 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black bg-white bg-gradient-to-t from-gray-400 to-gray-700">
                <div className="container px-4 mx-auto">
                    <div className="flex text-2xl flex-wrap justify-center gap-8 mb-8">
                        <a href="https://github.com/sagolsa78"><FaGithub className="" /></a>
                        <a href="https://x.com/sagolsa78"> <FaXTwitter /></a>
                        <a href="https://www.linkedin.com/in/sahani78/ "> <CiLinkedin /></a>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm ">
                    <p>© {new Date().getFullYear()} Mohit Sahani. All Rights Reserved.</p>

                    <ContactMail/>
                </div>
            </footer>
        </>
    )
}


function ContactMail(){
    return (
        <>
        <div className="mt-2 ">
            <a href="mailto:sahanimohit5ed@gmail.com" className="text-purple-400 hover:text-purple-300">
                sahanimohit5ed@gmail.com</a></div></>
    )

}

export default Footer;
