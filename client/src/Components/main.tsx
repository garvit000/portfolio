import { motion } from "framer-motion";
import HeroName from "./HeroName";
import MySelf from "./MySelf";

function Main() {
  return (
    <main className="min-h-screen bg-linear-to-b from-black to-gray-800 px-4 py-12 flex flex-col justify-between">
      <div>
        <HeroName/>
        <MySelf/>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="px-5 pb-8 text-white/40 text-xs sm:text-sm font-mono flex items-center gap-2"
      >
        <span>scroll to explore</span>
        <span className="text-white/60">↓</span>
      </motion.div>
    </main>
  );
}

export default Main;
