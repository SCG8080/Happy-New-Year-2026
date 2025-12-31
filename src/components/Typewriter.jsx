import { useState, useEffect } from 'react';

const Typewriter = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50); // Typing speed

            return () => clearTimeout(timeout);
        } else if (onComplete) {
            // Add a small delay after typing finishes before triggering onComplete
            const timeout = setTimeout(() => {
                onComplete();
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, onComplete]);

    return (
        <div className="font-mono text-amber-500 text-lg md:text-xl p-4 bg-black/50 rounded-lg border border-amber-500/20 inline-block mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-sm">
            <span className="text-purple-400">root@SCG:~$</span>
            <span className="ml-2 text-green-400">{displayText}</span>
            <span className="animate-pulse inline-block w-2.5 h-5 bg-amber-500 ml-1 align-middle"></span>
        </div>
    );
};

export default Typewriter;
