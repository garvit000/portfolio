import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaCopy, FaCheck } from "react-icons/fa";

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "contact@garvitsr.dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-amber-600 to-gray-900 mx-auto text-white w-full min-h-screen flex flex-col justify-between pt-20 px-6 sm:px-12">
      <div className="flex-grow flex flex-col justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center md:text-left font-bold font-mono text-cyan-300 md:ml-12 lg:ml-20 md:mt-4 leading-none select-none tracking-tight">
          Thanks for <br /> visiting!
        </h1>

        <div className="mx-auto md:mr-12 lg:mr-20 md:self-end md:-mt-16 mt-12 rounded-2xl p-6 bg-gradient-to-r from-purple-500 to-emerald-500 max-w-sm w-full shadow-2xl shadow-black/40 border border-white/20">
          <p className="font-bold text-2xl sm:text-3xl text-white mb-4">Connect:</p>
          <div className="flex justify-around sm:justify-between items-center px-2">
            <a
              href="https://github.com/garvit000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-200 hover:text-white hover:scale-125 transition-transform duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/garvit-s-r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-blue-200 hover:text-white hover:scale-125 transition-transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://instagram.com/garvit_s_r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-pink-200 hover:text-white hover:scale-125 transition-transform duration-200"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between gap-2">
            <span className="text-xs font-mono text-white/90 truncate">{email}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white text-xs font-mono transition-all flex items-center gap-1 flex-shrink-0 cursor-pointer"
              title="Copy Email"
            >
              {copied ? <FaCheck className="text-emerald-200 text-xs" /> : <FaCopy className="text-xs" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-white/10 text-gray-400 font-mono text-sm sm:text-base">
        <p className="text-gray-300">GSR Projects</p>
        <button
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
