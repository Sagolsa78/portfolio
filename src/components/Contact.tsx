import { motion } from "framer-motion";


const handleSubmit=(e:any)=>{
    e.preventDefault();
    //logic

    alert("Message Sent");

}

function Contact() {
    return (
        <>
            <div id="Contacts" className="py-20  bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 transition-colors duration-500">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                                Ping Me
                            </span>
                            <span className="ml-2 text-black dark:text-white">🚀</span>
                        </h2>

                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-lg border border-gray-800">
                                <form  onSubmit={handleSubmit} className="space-y-6" action="#">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            id="name"
                                            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-3"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            id="email"
                                            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-3"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-3"
                                            rows={5}
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full text-white font-semibold py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Contact;
