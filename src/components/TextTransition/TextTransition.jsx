import React, { useEffect, useState, useRef } from 'react';
import './TextTransition.scss';

const TextTransition = ({ text, speed = 0.01 }) => {
    const [glowText, setGlowText] = useState([]);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    generateGlowingText();
                    observer.unobserve(textRef.current);
                }
            });
        });

        observer.observe(textRef.current);

        return () => {
            observer.disconnect();
        };
    }, [text, speed]);

    const generateGlowingText = () => {
        const animationDuration = 1;
        const animationDelayBase = speed;

        const glowingText = text.split('').map((char, index) => {
            const animationDelay = index * animationDelayBase;
            return (
                <span key={index} style={{ animationDelay: `${animationDelay}s`, animationDuration: `${animationDuration}s` }}>
                    {char}
                </span>
            );
        });
        setGlowText(glowingText);
    };

    return (
        <div className="mast__title" ref={textRef}>
            <p>{glowText}</p>
        </div>
    );
};

export default TextTransition;