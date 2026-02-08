export default function About() {
    return (
        <div id="about" className="min-h-screen bg-gray-800 px-6 py-24 flex justify-center">
        <div className="bg-black border-gray-700/50 stroke-1 rounded-lg max-w-3xl w-full px-8 py-4">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
                <span className="w-3 h-3 bg-red-500 rounded-full "></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full "></span>
                <span className="w-3 h-3 bg-green-500 rounded-full "></span>
                <span className="ml-3 text-sm text-gray-400 font-mono">GSR@portfolio:~ /about</span>
            </div>
            <div className="font-mono text-gray-300">
                <span className="text-green-400">garvit@portfolio</span>
                <span className="text-blue-400"> ~ </span>
                <span className="text-gray-400">$</span>
                <span className="ml-2">about</span>
            </div>
            <div contentEditable={true}
                className="mt-4 text-gray-300 font-mono blink bg-gray-900/20 p-4 rounded-lg min-h-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <p>Hello! I'm Garvit Singh Rathore, a passionate Full Stack Developer and CSE Undergrad. I specialize in building scalable web applications and have a keen interest in cloud architecture. I'm also an active Open Source Contributor, always eager to collaborate and learn from the community.</p>
                <p>With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences while ensuring robust functionality. My journey in tech is driven by curiosity and a desire to solve real-world problems through code.</p>
                <p>Feel free to explore my projects and connect with me to discuss potential collaborations or just to say hi!</p>
            </div>
        </div>
        </div>
    )
}