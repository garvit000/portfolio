import ProjectCard from "./projectCards";
import Data from "./data";

function Projects() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-fuchsia-500 to-amber-600 py-12">
            <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {Data.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            link={project.link}
                        />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a 
                        href="https://github.com/garvit000" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white text-fuchsia-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                    >
                        View all projects on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;