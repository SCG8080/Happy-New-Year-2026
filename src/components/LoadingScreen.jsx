import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Accelerate progress for "C-Level speed"
        // 0 to 100 in ~2.5 seconds max
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                // Non-linear progress for realism
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-scg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-scg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-64 md:w-80">
                {/* Logo Outline Effect */}
                <div className="mb-12 flex justify-center">
                    <div className="w-20 h-20 border border-scg-gold/30 rounded-full flex items-center justify-center animate-pulse-slow">
                        <span className="text-2xl font-serif text-scg-gold">SCG</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
                    <div
                        className="absolute top-0 left-0 h-full bg-scg-gold transition-all duration-300 ease-out shadow-[0_0_15px_#d4af37]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Status Text - Minimal */}
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xs font-sans tracking-[0.2em] text-white/50 uppercase">
                        Initializing
                    </span>
                    <span className="text-xs font-mono text-scg-gold">
                        {Math.floor(progress)}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
