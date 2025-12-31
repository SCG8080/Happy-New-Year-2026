import { useState } from 'react';
import confetti from 'canvas-confetti';
import Fireworks from './components/Fireworks';
import TechOrbit from './components/TechOrbit';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Transition handler
  const handleLoadingComplete = () => {
    setLoading(false);
    // Slight delay to ensure DOM is ready for entrance animations
    setTimeout(() => setShowContent(true), 100);
  };

  const handleLaunch = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d4af37', '#ffffff'] // Gold & White
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d4af37', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!loading && (
        <div className="min-h-screen bg-scg-black relative overflow-x-hidden selection:bg-scg-gold selection:text-black">
          {/* Ambient Background */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <Fireworks />
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-scg-gold/5 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-scg-gold/5 rounded-full blur-[150px]"></div>
          </div>

          {/* Main Layout */}
          <div className={`relative z-10 transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Navigation / Header (Minimal) */}
            <nav className="w-full p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto">
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/5">
                <span className="text-scg-gold font-serif font-bold text-lg">S</span>
              </div>
              <div className="hidden md:block text-xs uppercase tracking-[0.25em] text-white/40">
                Executive Briefing  •  2026 Strategy
              </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left: Content */}
                <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
                  <div className="inline-block mb-6 px-4 py-2 rounded-full border border-scg-gold/20 bg-scg-gold/5 backdrop-blur-sm animate-fade-in">
                    <span className="text-xs uppercase tracking-[0.2em] text-scg-gold">Symbiotic Consulting Group</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
                    <span className="block text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>Visionary</span>
                    <span className="block text-gradient-gold animate-slide-up" style={{ animationDelay: '0.2s' }}>Success</span>
                    <span className="block text-white/80 font-sans font-light text-4xl md:text-6xl mt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>2026 & Beyond</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    As we architect the future, we honor the milestones of the past. Thank you for a year of extraordinary partnership and innovation.
                  </p>

                  <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    <button onClick={handleLaunch} className="btn-primary group relative overflow-hidden">
                      <span className="relative z-10">Launch 2026</span>
                    </button>
                    <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Systems Optimized
                    </div>
                  </div>
                </div>

                {/* Right: Visual / Interactive */}
                <div className="lg:col-span-5 order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                  {/* Tech Orbit Container */}
                  <div className="absolute inset-0 z-0 opacity-50 pointer-events-none md:pointer-events-auto">
                    <TechOrbit />
                  </div>

                  {/* Central Logo */}
                  <div className="relative z-10 animate-float bg-black/20 backdrop-blur-sm rounded-full p-8 border border-white/5 shadow-2xl">
                    <img
                      src="/Happy-New-Year-2026/SCG.png"
                      alt="SCG"
                      className="w-40 md:w-56 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                      onError={(e) => {
                        if (e.target.src.includes('Happy-New-Year-2026')) {
                          e.target.src = '/SCG.png';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Glass Card Letter Section */}
              <div className="mt-32 relative z-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <div className="glass-card p-8 md:p-16 rounded-3xl max-w-4xl mx-auto text-center md:text-left relative overflow-hidden">
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-8 right-12 text-9xl font-serif text-scg-gold/5 select-none">"</div>

                  <h3 className="text-2xl font-serif text-scg-gold mb-8">To Our Valued Partners</h3>

                  <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                    <p>
                      Excellence is not an endpoint; it is a continuous orbit. In 2025, we navigated complex digital landscapes together, turning ambitious challenges into strategic victories.
                    </p>
                    <p>
                      At Symbiotic Consulting Group, we don't just write code; we write the future. Your trust empowers us to deploy solutions that define industries.
                    </p>
                    <p>
                      As we initialize 2026, our commitment to your growth is absolute. We are ready to execute on a shared vision of limitless potential.
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-serif text-xl italic text-white">The SCG Executive Team</span>
                    <span className="font-mono text-xs text-scg-gold/70">ID: 2026-EXEC-BRIEF // SECURE</span>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-8 text-center border-t border-white/5 bg-black/50 backdrop-blur-sm">
              <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                © 2026 Symbiotic Consulting Group. All Systems Nominal.
              </p>
            </footer>

          </div>
        </div>
      )}
    </>
  );
}

export default App;
