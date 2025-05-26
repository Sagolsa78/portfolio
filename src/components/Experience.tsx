
import { motion } from "framer-motion"
import { Blocks } from "lucide-react";

function ServiceCard({ icon, title, description }:{icon:React.ReactNode; title:string; description:string}) {
    return (
        <div className="p-6 rounded-lg bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>

        </div>

    )

}

function Experience() {
    return (

        <>
            <div className="py-20 bg-black">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                                My Expertise
                            </span>
                            <span className="ml-2 text-white">🛠️</span>
                        </h2>

                        <div>
                            <ServiceCard
                                icon={<Blocks className="w-10 h-10 text-purple-500"></Blocks>}
                                title="MERN Stack "
                                description="pritty Decent in Web development."></ServiceCard>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}


export default Experience;