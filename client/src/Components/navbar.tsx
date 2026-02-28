import { motion } from "framer-motion";
import GSR from "../assets/gsr.png";

function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className='bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 rounded-full px-8 py-4 flex justify-between items-center border border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30'>
          <img src={GSR} alt="GSR" className="w-25 h-15" />
          <ul className='sm:flex space-x-8'>
            <li className='group'>
              <a href="/gsr_resume.pdf" target="_blank" rel="noopener noreferrer" className='relative text-white/90 hover:text-white text-2xl font-bold transition-colors duration-200'>
                <span style={{ fontFamily: "Calibri, serif" }}>Résumé</span>
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar;