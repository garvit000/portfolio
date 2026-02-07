import { motion } from "framer-motion";

const name = "Garvit Singh Rathore";
export default function HeroName() {
    return (
        <h1 className="min-h-screen font-sans font-extrabold text-[6.5rem] text-fuchsia-100 leading-tight py-20 px-5">
            {name.split("").map((char, i) =>  (
                <motion.span
                    key={i}
                    initial={{ y:80, opacity:0}}
                    animate={{ y:0, opacity:1}}
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