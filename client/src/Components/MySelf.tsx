import { motion } from "framer-motion";
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
        let timeout = setTimeout(() => {
            if(!isDeleting) {
                if(charIndex < currentRole.length) {
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                if(charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                   }   else {
                        setIsDeleting(false);
                        setRoleIndex((prev) => (prev + 1) % roleNames.length);
                    }
                }
            }, setIsDeleting ? 50 : 150);
            return () => clearTimeout(timeout);
        }, [charIndex, isDeleting, roleIndex, roleNames]);

        const currentRole = roleNames[roleIndex];
        const displayedText = currentRole.slice(0, charIndex);

    return (
        <p className="max-w-2xl text-4xl titillium text-gray-300 mt-8 px-5">
            I am a <span className={`text-4xl ${roles[currentRole]}`}>{displayedText}</span>
             <span className="animate-pulse">|</span>
        </p>
       
    )
}