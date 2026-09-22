import { motion } from "framer-motion";
export default function About() {
    return (
        <div id="about" className="min-h-screen bg-gray-800 px-6 py-24 flex justify-center">
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-black/90 border border-gray-700/60 rounded-xl max-w-3xl w-full px-6 py-5 shadow-2xl shadow-black/60 backdrop-blur-sm"
            >
                <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
                    <span className="w-3 h-3 bg-red-500 rounded-full inline-block transition-transform hover:scale-125 cursor-pointer"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block transition-transform hover:scale-125 cursor-pointer"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full inline-block transition-transform hover:scale-125 cursor-pointer"></span>
                    <span className="ml-3 text-xs sm:text-sm text-gray-400 font-mono">GSR@portfolio:~ /about</span>
                </div>
                <div className="font-mono text-sm sm:text-base text-gray-300 flex items-center gap-1.5 flex-wrap">
                    <span className="text-green-400">garvit@portfolio</span>
                    <span className="text-blue-400">:~</span>
                    <span className="text-gray-400">$</span>
                    <span className="text-white ml-1">about</span>
                    <span className="w-2 h-4 bg-green-400 inline-block animate-pulse ml-0.5" />
                </div>

                <div className="mt-5 text-gray-300 font-mono text-sm sm:text-base bg-gray-900/30 p-5 rounded-lg border border-gray-800/80 leading-relaxed space-y-4">
                    <p>Hello! I'm <span className="text-white font-semibold">Garvit Singh Rathore</span>, a passionate Full Stack Developer and CSE Undergrad. I specialize in building scalable web applications and have a keen interest in cloud architecture. I'm also an active Open Source Contributor, always eager to collaborate and learn from the community.</p>
                    <p>With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences while ensuring robust functionality. My journey in tech is driven by curiosity and a desire to solve real-world problems through code.</p>
                    <p>Feel free to explore my projects and connect with me to discuss potential collaborations or just to say hi!</p>
                </div>
            </motion.div>
        </div>
    )
}