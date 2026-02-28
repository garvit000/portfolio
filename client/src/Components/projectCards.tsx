import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index?: number;
}

function projectCards({
  title,
  description,
  imageUrl,
  link,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group"
    >
      <div className="relative overflow-hidden w-full h-56">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow items-center text-center">
        <h3 className="font-bold text-2xl text-white tracking-wide mb-3">{title}</h3>
        <p className="text-white/70 text-sm sm:text-base mb-6 flex-grow">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 border border-white/20 text-white/90 rounded-full py-3 px-6 text-sm font-medium hover:bg-white/20 hover:text-white transition-all duration-300 w-full"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}

export default projectCards;