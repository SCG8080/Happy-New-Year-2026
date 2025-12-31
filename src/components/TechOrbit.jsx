import { useEffect, useRef } from 'react';

const techs = [
    { name: 'SQL', size: 1.2 },
    { name: 'RPA', size: 1.1 },
    { name: 'PowerApps', size: 1.3 },
    { name: 'Blazor', size: 1.0 },
    { name: 'ServiceNow', size: 1.2 },
    { name: 'Mobile', size: 1.1 },
    { name: 'Azure', size: 1.4 },
    { name: '.NET', size: 1.0 },
];

const TechOrbit = () => {
    const containerRef = useRef(null);
    const bubblesRef = useRef(techs.map(() => ({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15
    })));

    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            if (!containerRef.current) return;

            const bubbles = bubblesRef.current;
            const elements = containerRef.current.children;

            bubbles.forEach((bubble, i) => {
                bubble.x += bubble.vx;
                bubble.y += bubble.vy;

                if (bubble.x <= 5 || bubble.x >= 95) bubble.vx *= -1;
                if (bubble.y <= 5 || bubble.y >= 95) bubble.vy *= -1;

                if (elements[i]) {
                    elements[i].style.left = `${bubble.x}%`;
                    elements[i].style.top = `${bubble.y}%`;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full">
            {techs.map((tech) => (
                <div
                    key={tech.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-50 group"
                >
                    <div className="relative px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-lg group-hover:border-scg-gold/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        <span className="text-xs font-mono text-gray-300 group-hover:text-scg-gold transition-colors">
                            {tech.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechOrbit;
