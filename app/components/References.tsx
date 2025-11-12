'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function References() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reference company logos - Real construction companies
  const references = [
    {
      name: 'Can İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/can-insaat.webp',
    },
    {
      name: 'Yılkanur A.Ş',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/yilkanur-as.webp',
    },
    {
      name: 'Nişantaşı Yapı A.Ş',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/nisantasi-yapi-as.webp',
    },
    {
      name: 'Türkiye Diyanet Vakfı',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/turkiye-diyanet-vakfi.webp',
    },
    {
      name: 'YCG İnşaat Mühendislik',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/ycg-insaat-muhendislik.webp',
    },
    {
      name: 'Tekon İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/tekon-insaat.webp',
    },
    {
      name: 'Metron Yapı',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/metron-yapi.webp',
    },
    {
      name: 'Atlantik Grup',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/atlantik-grup.webp',
    },
    {
      name: 'Sondem İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/sondem-insaat.webp',
    },
    {
      name: 'Aydur İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/aydur-insaat.webp',
    },
  ];

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
        >
          <div className="inline-block mb-3">
            <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
              Referanslarımız
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Güvenilir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              İş Ortaklarımız
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Türkiye'nin önde gelen inşaat firmalarına hizmet veriyoruz
          </p>
        </motion.div>

        {/* Single Row Slider Container */}
        <div ref={containerRef} className="w-full">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className={`flex ${isVisible ? 'animate-slide' : ''}`}
              >
                {/* Original Logos */}
                {references.map((reference, index) => (
                  <div 
                    key={`original-${index}`}
                    className="flex-shrink-0 mx-4"
                  >
                    <div className="group relative">
                      <div className="w-[280px] h-[160px] sm:w-[320px] sm:h-[180px] lg:w-[360px] lg:h-[200px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden group-hover:bg-white/10">
                        <img 
                          src={reference.logo} 
                          alt={reference.name}
                          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 scale-[1.8] group-hover:scale-[1.85]"
                          loading="lazy"
                        />
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-2xl blur-xl transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate for seamless loop */}
                {references.map((reference, index) => (
                  <div 
                    key={`clone-${index}`}
                    className="flex-shrink-0 mx-4"
                  >
                    <div className="group relative">
                      <div className="w-[280px] h-[160px] sm:w-[320px] sm:h-[180px] lg:w-[360px] lg:h-[200px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden group-hover:bg-white/10">
                        <img 
                          src={reference.logo} 
                          alt={reference.name}
                          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 scale-[1.8] group-hover:scale-[1.85]"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-2xl blur-xl transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 8s linear infinite;
        }
        
        @media (min-width: 768px) {
          .animate-slide {
            animation: slide 20s linear infinite;
          }
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

