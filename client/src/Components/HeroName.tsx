import { motion } from "framer-motion";

const name = "Garvit Singh Rathore";
export default function HeroName() {
    return (
        <h1 className="font-sans font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] text-white leading-tight pt-28 pb-4 sm:py-20 px-5 tracking-tight">
            {name.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: i * 0.05,
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            )
            )}
        </h1>
    )
}