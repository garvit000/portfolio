import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { FaReact, FaNodeJs, FaGithub, FaCloud, FaDocker, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGreensock, SiFramer } from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';

const skillCategories = [
    {
        title: "LANGUAGES",
        skills: [
            { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
            { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
            { name: 'C#', icon: TbBrandCSharp, color: 'text-purple-500' },
            { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
            { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
        ]
    },
    {
        title: "FRAMEWORKS",
        skills: [
            { name: 'React', icon: FaReact, color: 'text-blue-400' },
            { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
            { name: '.NET', icon: DiDotnet, color: 'text-purple-500' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'GSAP', icon: SiGreensock, color: 'text-green-400' },
            { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
        ]
    },
    {
        title: "TOOLS & CLOUD",
        skills: [
            { name: 'Git / GitHub', icon: FaGithub, color: 'text-white' },
            { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
            { name: 'AWS / GCP', icon: FaCloud, color: 'text-blue-300' },
            { name: 'REST APIs', icon: TbApi, color: 'text-gray-300' },
        ]
    }
];

export default function Skills() {
    const containerRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!containerRef.current || !trackRef.current) return;

        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            const getScrollAmount = () => {
                const trackWidth = track.scrollWidth;
                return Math.max(0, trackWidth - window.innerWidth);
            };

            const scrollTween = gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => `+=${getScrollAmount()}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            categoriesRef.current.forEach((catNode) => {
                if (!catNode) return;

                const titleLetters = catNode.querySelectorAll('.cat-letter');
                const skillCards = catNode.querySelectorAll('.skill-card');

                // Animate title letters
                gsap.fromTo(titleLetters,
                    { opacity: 0, scale: 0.5, y: 50 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        stagger: 0.05,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: catNode,
                            containerAnimation: scrollTween,
                            start: "left 85%", // triggers when section is 85% into the viewport from right
                            toggleActions: "play none none reverse",
                        }
                    }
                );

                // Animate skill cards
                gsap.fromTo(skillCards,
                    { opacity: 0, y: 40, scale: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.08,
                        duration: 0.6,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: catNode,
                            containerAnimation: scrollTween,
                            start: "left 70%", // triggers slightly later than titles
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-linear-to-b from-gray-800 via-gray-900 to-black overflow-hidden"
        >
            <div ref={trackRef} className="flex h-screen items-center w-max">
                {/* Intro Screen */}
                <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6">
                    <div className="max-w-5xl w-full text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent font-thin"
                        >
                            MY ARSENAL
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                            className="mt-6 text-white/70"
                        >
                            Scroll to reveal what I’m best at.
                        </motion.p>
                    </div>
                </div>

                {/* Dynamic Categories Container */}
                <div className="flex h-full items-center pl-12 pr-[40vw] gap-32 sm:gap-48">
                    {skillCategories.map((cat, catIndex) => (
                        <div
                            key={cat.title}
                            ref={(el) => { categoriesRef.current[catIndex] = el; }}
                            className="flex flex-col gap-10 sm:gap-14"
                        >
                            {/* Animated Title */}
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white/40 tracking-widest flex">
                                {cat.title.split('').map((char, charIndex) => (
                                    <span
                                        key={charIndex}
                                        className="cat-letter inline-block"
                                        style={char === ' ' ? { width: '0.4em' } : {}}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </h2>

                            {/* Skills Grid */}
                            <div className="grid grid-rows-2 grid-flow-col gap-4 sm:gap-6">
                                {cat.skills.map(({ name, icon: Icon, color }) => (
                                    <div
                                        key={name}
                                        className="skill-card flex flex-col items-center justify-center gap-3 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4 text-white/90 text-center hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                                    >
                                        <div className={`text-5xl sm:text-6xl ${color} transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                                            <Icon />
                                        </div>
                                        <span className="font-medium tracking-wide text-xs sm:text-sm">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}