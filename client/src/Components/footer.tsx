import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

function Footer() {
  const email = "contact@garvitsr.dev";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-zinc-950 via-black to-black text-white w-full min-h-screen flex flex-col justify-between pt-24 pb-10 px-6 sm:px-12 lg:px-20 border-t border-white/5">
      <div className="flex-grow flex flex-col lg:flex-row lg:items-center justify-between gap-12 max-w-7xl mx-auto w-full my-auto">
        {/* Left: Bold Hero Typography */}
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-mono tracking-tighter leading-none select-none bg-gradient-to-br from-white via-gray-100 to-cyan-400 bg-clip-text text-transparent">
            Thanks for <br /> visiting!
          </h1>
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-md font-sans leading-relaxed">
            Have an exciting opportunity, project idea, or just want to talk tech? My inbox is always open.
          </p>
        </div>

        {/* Right: Minimalist Connect Card */}
        <div className="w-full max-w-md rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Get in touch
              </span>
              </div>

            <p className="font-bold text-2xl sm:text-3xl text-white mb-6 font-sans">
              Let's connect.
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/garvit000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-200 group"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
                <span className="text-xs font-mono text-gray-400 group-hover:text-white">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/garvit-s-r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-200 group"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
                <span className="text-xs font-mono text-gray-400 group-hover:text-white">LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/garvit_s_r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink-400/40 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-200 group"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="text-2xl text-gray-300 group-hover:text-pink-400 transition-colors" />
                <span className="text-xs font-mono text-gray-400 group-hover:text-white">Instagram</span>
              </a>
            </div>
          </div>

          {/* Email row with Copy Button */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-3">
            <a
              href={`mailto:${email}`}
              className="text-xs sm:text-sm font-mono text-gray-300 hover:text-cyan-400 transition-colors truncate"
              title="Click to email"
            >
              {email}
            </a>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-white/10 text-gray-400 font-mono text-xs sm:text-sm">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Garvit Singh Rathore <span className="mx-2">•</span> GSR Projects
        </p>
        <button
          onClick={scrollToTop}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
        >
          <span>Back to Top</span>
          <FaArrowUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
