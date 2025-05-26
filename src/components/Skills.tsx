import { motion } from "framer-motion";

const skillsData = {
    "Programming Languages": [
        { name: "Python", proficiency: 85 },
        { name: "SQL (PostgreSQL)", proficiency: 75 },
        { name: "JavaScript", proficiency: 90 },
        { name: "HTML/CSS", proficiency: 95 },
    ],
    "Frameworks & Libraries": [
        { name: "React", proficiency: 85 },
        { name: "Node.js", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "Material-UI", proficiency: 70 },
        { name: "WordPress", proficiency: 65 },
        { name: "Rapid API", proficiency: 60 },
    ],
    "Cloud & Platforms": [
        { name: "Google Cloud Platform", proficiency: 70 },
        { name: "Replit", proficiency: 60 },
    ],
    "Developer Tools": [
        { name: "Git", proficiency: 85 },
        { name: "VS Code", proficiency: 90 },
        { name: "Visual Studio", proficiency: 80 },
    ]
};


function Skills() {
    return (
        <>
            <section className="py-12  bg-gradient-to-b  from-black  to-gray-900  " id="skills">
                <div className="container px-4 mx-auto ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                    </motion.div>

                    <div >
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center ">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                            >Code Arsenal</span>
                            <span className="ml-2 text-white">⚔️</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
                            {Object.entries(skillsData).map(([category, skills]) => (
                                <div key={category} className="p-6  bg-gray-900/50 -xl backdrop-blur-sm border border-gray-800">
                                    <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left ">{category}</h4>
                                    {skills.map((skill) => (
                                        <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function SkillBar({ name, proficiency }:{name:string; proficiency:number}) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className=" text-gray-300">{name}</span>
                <span className=" text-gray-800">{proficiency}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500">
                </motion.div>
            </div>
        </div>
    )

}

export default Skills;


