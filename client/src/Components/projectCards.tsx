import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  liveUrl?: string;
  tags?: string[];
  index?: number;
}

function ProjectCards({
  title,
  description,
  imageUrl,
  link,
  liveUrl,
  tags,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden w-full h-56">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow items-center text-center">
        <h3 className="font-bold text-2xl text-white tracking-wide mb-3 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-sm sm:text-base mb-5 flex-grow leading-relaxed">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 w-full mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/15 border border-white/25 text-white rounded-full py-2.5 px-4 text-sm font-semibold hover:bg-white/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 text-center"
            >
              Live Demo ↗
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 bg-white/5 border border-white/15 text-white/80 rounded-full py-2.5 px-4 text-sm font-medium hover:bg-white/15 hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-200 text-center ${
              !liveUrl ? "w-full" : ""
            }`}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;