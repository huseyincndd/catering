'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Toplu Yemek Hizmeti",
      description: "TOKİ projeleri ve Nesibe Aydın Okulları gibi kurumsal müşterilerimize günlük 12.000 kişiye kadar hijyenik ve lezzetli yemek hizmeti sunuyoruz."
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Kalite ve Hijyen",
      description: "Gıda güvenliği standartlarına tam uyum sağlayarak, tüm süreçlerimizde hijyen kurallarını titizlikle uyguluyoruz. Müşteri memnuniyeti önceliğimizdir."
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Zamanında Teslimat",
      description: "Şantiye ve okul projelerinde zamanında teslimat garantisi ile hizmet veriyoruz. Deneyimli ekibimiz ve planlı çalışma sistemimizle güvenilir bir iş ortağıyız."
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

