import ProjectCard from "./projectCards";
import Data from "./data";
import { motion } from "framer-motion";

function Projects() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-black via-black to-amber-600 py-24" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-6xl px-6"
            >
                <h2 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent mb-16 text-center tracking-tight">
                    PROJECTS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Data.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            link={project.link}
                            index={index}
                        />

                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/garvit000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-white/10 border border-white/20 backdrop-blur-md py-4 px-8 text-white/90 font-medium hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    >
                        View all projects on GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;