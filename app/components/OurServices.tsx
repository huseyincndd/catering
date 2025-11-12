'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Toplu Yemek',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/topluyemek.jpg',
      description: 'Şantiyeler ve toplu yaşam alanları için günlük taze yemek hizmeti'
    },
    {
      title: 'Organizasyon Yemek',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/organizasyon.jpg',
      description: 'Özel etkinlikleriniz için profesyonel catering hizmeti'
    },
    {
      title: 'Kafeterya Kantin',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/kafeterya.jpg',
      description: 'İşletmeniz için modern kafeterya ve kantin yönetimi'
    },
    {
      title: 'Yerinde Üretim',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/yerinde%C3%BCretim.jpg',
      description: 'Lokasyonunuzda taze ve hijyenik yemek üretimi'
    },
    {
      title: 'Kutu Yemek',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/kutuyemek.jpg',
      description: 'Pratik ve hijyenik paket yemek çözümleri'
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Get current 3 visible items for desktop, 1 for mobile
  const getVisibleItems = () => {
    const items = [];
    // Always prepare 3 items for smooth transition
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      items.push({ ...services[index], originalIndex: index });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider">
              Hizmetlerimiz
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Profesyonel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Catering Çözümleri
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Her ihtiyaca özel, kaliteli ve hijyenik yemek hizmetleri ile yanınızdayız
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-orange-500 group-hover:scale-110 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center group"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-orange-500 group-hover:scale-110 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Items */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Mobile: Show only first item */}
                <div className="md:hidden group relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img
                      src={visibleItems[0].image}
                      alt={visibleItems[0].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{visibleItems[0].title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{visibleItems[0].description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop: Show all 3 items */}
                {visibleItems.map((service, idx) => (
                  <div
                    key={service.originalIndex}
                    className="hidden md:block group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    <div className="relative aspect-square">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-orange-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group"
          >
            Tüm Hizmetlerimizi Keşfedin
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

