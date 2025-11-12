'use client';

import { motion } from 'framer-motion';

export default function SupplierCTA() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[400px]">
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 h-full flex items-end justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              <img
                src="https://png.pngtree.com/png-vector/20240103/ourmid/pngtree-businessman-with-arms-crossed-and-smiling-png-image_11398194.png"
                alt="Professional businessman"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 py-12 lg:py-16"
          >
            <div className="max-w-xl">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Siz de Tedarikçilerimiz
                <br />
                <span className="text-orange-500">Arasına Katılın!</span>
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Hizmet kalitemizin sürekliliği için tedarikçilerimizi özenle seçiyoruz.
              </p>

              {/* CTA Button */}
              <div>
                <a
                  href="#tedarikci-basvuru"
                  className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Tedarikçi Olmak İstiyorum
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

