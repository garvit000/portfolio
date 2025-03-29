import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 mx-auto text-white w-screen h-screen flex flex-col pt-22">
      <div className="flex-grow flex flex-col">
        <h1 className="text-4xl md:text-6xl lg:text-9xl text-center md:text-left font-bold font-mono text-cyan-300 md:ml-20 md:mt-10">
          Thanks for <br/> visiting!
        </h1>

        <div className="mx-auto md:mr-20 md:self-end md:-mt-20 mt-8 rounded-2xl p-5 bg-gradient-to-r from-purple-400 to-emerald-500 max-w-xs">
          <p className="font-bold text-3xl">Connect:</p>
          <div className="flex justify-between pt-3 cursor-pointer">
            <a href="https://github.com/garvit000" target="_blank">
              <FaGithub className="text-3xl text-gray-300 hover:text-4xl transition-all duration-300" />
            </a>
            <a href="https://linkedin.com/in/garvit-s-r" target="_blank">
              <FaLinkedin className="text-3xl text-blue-500 hover:text-4xl transition-all duration-300" />
            </a>
            <a href="https://instagram.com/garvit_s_r" target="_blank">
              <FaInstagram className="text-3xl text-pink-500 hover:text-4xl transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
   <div className="text-center mb-4">
        <p className="text-gray-400 text-xl">
          &copy; {new Date().getFullYear()} GSR Projects
        </p>
      </div>
    </div>
  );
}

export default Footer;
