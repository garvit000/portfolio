import { useState, useEffect } from "react";

const roles: Record<string, string> = {
  "Full Stack Developer": "text-green-400",
  "CSE Undergrad": "text-pink-400",
  "Cloud Architect": "text-blue-400",
  "Open Source Contributor": "text-yellow-400",
};

export default function MySelf() {

    const roleNames = Object.keys(roles);
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roleNames[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roleNames.length);
                }
            }
        }, isDeleting ? 50 : 150);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roleNames]);

    const currentRole = roleNames[roleIndex];
    const displayedText = currentRole.slice(0, charIndex);

    return (
        <p className="max-w-2xl text-2xl sm:text-3xl md:text-4xl titillium text-gray-300 mt-4 sm:mt-8 px-5">
            I am a <span className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${roles[currentRole]} drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]`}>{displayedText}</span>
            <span className="animate-pulse ml-1 text-white/70">|</span>
        </p>

    )
}