import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const expertise = {
    'React': "./react.png",
    'TypeScript': "./typescript.png",
    'Node.js': "./node.png",
    'Tailwind CSS': "./tailwind.png",
    'GSAP': "./gsap.png",
    'Framer Motion': "./framer.png",
    'REST APIs': "./rest.png",
    'Git / GitHub': "./git.png",
    'Cloud Basics': "./cloud.png",
};

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

                <div className="w-screen min-h-screen px-6 py-24 flex justify-center items-center">
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
                            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4"
                        >
                            {Object.keys(expertise).map((skill) => (
                                <motion.div
                                    key={skill}
                                    variants={{
                                        hidden: { opacity: 0, y: 14 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-5 py-4 text-white/90 text-center"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}