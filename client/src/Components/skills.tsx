import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { FaReact, FaNodeJs, FaGithub, FaCloud, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGreensock, SiFramer } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const expertise = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'GSAP', icon: SiGreensock, color: 'text-green-400' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
    { name: 'REST APIs', icon: TbApi, color: 'text-gray-300' },
    { name: 'Git / GitHub', icon: FaGithub, color: 'text-white' },
    { name: 'AWS/Google Cloud', icon: FaCloud, color: 'text-blue-300' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
];

export default function Skills() {
    const containerRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [showExpertise, setShowExpertise] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current || !trackRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(trackRef.current, { x: 0 });

            gsap.to(trackRef.current, {
                x: () => -window.innerWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => `+=${window.innerWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (self.progress > 0.45) setShowExpertise(true);
                    },
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-linear-to-b from-gray-800 via-gray-900 to-black overflow-hidden"
        >
            <div ref={trackRef} className="flex w-[200vw] min-h-screen">
                <div className="w-screen min-h-screen px-6 py-24 flex justify-center items-center">
                    <div className="max-w-5xl w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent font-thin text-center"
                        >
                            MY ARSENAL
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                            className="mt-6 text-center text-white/70"
                        >
                            Scroll to reveal what I’m best at.
                        </motion.p>
                    </div>
                </div>

                <div className="w-screen min-h-screen px-4 sm:px-6 py-12 sm:py-24 flex justify-center items-center">
                    <div className="max-w-5xl w-full">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.06 },
                                },
                            }}
                            initial="hidden"
                            animate={showExpertise ? 'show' : 'hidden'}
                            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                        >
                            {expertise.map(({ name, icon: Icon, color }) => (
                                <motion.div
                                    key={name}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                                        show: { opacity: 1, y: 0, scale: 1 },
                                    }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 text-white/90 text-center hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                                >
                                    <div className={`text-4xl sm:text-5xl lg:text-6xl transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${color}`}>
                                        <Icon />
                                    </div>
                                    <span className="font-medium tracking-wide text-xs sm:text-sm lg:text-base">{name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}