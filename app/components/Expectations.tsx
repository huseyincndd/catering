'use client';

import { motion } from 'framer-motion';

export default function Expectations() {
  const expectations = [
    {
      title: "Hijyen ve Gıda Güvenliği",
      description: "Tüm üretim süreçlerimizde hijyen kurallarını titizlikle uygulayarak, gıda güvenliği standartlarına uygun hizmet veriyoruz."
    },
    {
      title: "Taze ve Kaliteli Ürünler",
      description: "Günlük taze ürün tedariki ile kaliteli malzemeler kullanarak, lezzetli ve sağlıklı yemekler hazırlıyoruz."
    },
    {
      title: "Güvenilir Teslimat",
      description: "TOKİ şantiyeleri ve eğitim kurumlarına zamanında ve güvenli teslimat garantisi ile hizmet veriyoruz."
    }
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider">
              Kalite Standartlarımız
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Kalite ve Güvenlik
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              İlkelerimiz
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Müşterilerimize en yüksek kalitede hizmet sunmak için tedarik zincirinin her aşamasında titizlikle çalışıyoruz
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div
                  className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 transform group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: 'url(https://simprasuite.com.tr/blog/wp-content/uploads/2024/10/catering-nedir.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Kalite Garantisi</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <a
                href="/kurumsal"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 group"
              >
                Kurumsal Sayfamızı İnceleyin
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

