'use client';

import { motion } from 'framer-motion';

export default function References() {
  // Reference company logos - Real construction companies
  const references = [
    // Devam eden projelerde en çok çalışılan müteahhitler
    {
      name: 'Yılkanur A.Ş',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/yilkanur-as.webp',
    },
    {
      name: 'Gaziantep Gold Yapı',
      logo: 'https://villaqrmenu.b-cdn.net/atilgancatering/Gemini_Generated_Image_68nojn68nojn68no-Photoroom.png',
    },
    {
      name: 'MRF Group Tic. İnş. A.Ş',
      logo: 'https://villaqrmenu.b-cdn.net/atilgancatering/MRF_Group-07.png',
    },
    {
      name: 'Can İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/can-insaat.webp',
    },
    {
      name: 'Atlantik Grup',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/atlantik-grup.webp',
    },
    {
      name: 'Aydur İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/aydur-insaat.webp',
    },
    {
      name: 'Nişantaşı Yapı A.Ş',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/nisantasi-yapi-as.webp',
    },
    {
      name: 'Tekon İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/tekon-insaat.webp',
    },
    // Diğer uzun dönemli iş ortakları
    {
      name: 'YCG İnşaat Mühendislik',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/ycg-insaat-muhendislik.webp',
    },
    {
      name: 'Metron Yapı',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/metron-yapi.webp',
    },
    {
      name: 'Sondem İnşaat',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/sondem-insaat.webp',
    },
    {
      name: 'Türkiye Diyanet Vakfı',
      logo: 'https://demo1.tireyazilim.com/upload/referanslar/turkiye-diyanet-vakfi.webp',
    },
    {
      name: 'Nesibe Aydın Eğitim Kurumları',
      logo: 'https://www.ajansmention.com/wp-content/uploads/2019/01/nesibe-aydin-1.png',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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

      {/* Decorative Blurs - More prominent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header - More prominent */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <div className="inline-block mb-4">
            <span className="px-6 py-2.5 rounded-full bg-orange-500/30 border-2 border-orange-500/50 text-orange-300 text-sm font-bold uppercase tracking-wider backdrop-blur-sm shadow-lg shadow-orange-500/20">
              🤝 Referanslarımız
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-2xl">
            Güvenilir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 drop-shadow-lg">
              İş Ortaklarımız
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
            Türkiye'nin önde gelen inşaat firmalarına güvenle hizmet veriyoruz
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-orange-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">10+ Yıllık Güvenilir İşbirlikleri</span>
          </div>
        </motion.div>

        {/* Grid Container - 3 Columns */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {references.map((reference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative"
              >
                {/* Main Card - Premium Design */}
                <div className="relative h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] bg-white backdrop-blur-xl rounded-2xl border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-orange-500/40 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-orange-50/30 cursor-pointer">
                        <img 
                          src={reference.logo} 
                          alt={reference.name}
                    className={`w-full h-full object-contain p-4 transition-all duration-300 filter brightness-100 contrast-110 ${
                      reference.name === 'Gaziantep Gold Yapı'
                        ? 'scale-[2.1] group-hover:scale-[2.15] lg:scale-[1.2] lg:group-hover:scale-[1.25]'
                        : reference.name === 'Nesibe Aydın Eğitim Kurumları'
                        ? 'scale-[2.1] group-hover:scale-[2.15] lg:scale-[1.5] lg:group-hover:scale-[1.55]'
                        : reference.name === 'MRF Group Tic. İnş. A.Ş'
                        ? 'scale-[1.4] group-hover:scale-[1.45] lg:scale-[1.1] lg:group-hover:scale-[1.15]'
                        : 'scale-[2.1] group-hover:scale-[2.15]'
                    }`}
                          loading="lazy"
                        />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 group-hover:via-white/20 to-transparent transition-all duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                      </div>

                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                
                {/* Company Name - Always visible below card */}
                <div className="mt-3 text-center">
                  <span className="text-sm md:text-base font-semibold text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                    {reference.name}
                  </span>
                    </div>

                {/* Verified Badge on Hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-orange-500 text-white rounded-full p-1.5 shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="container mx-auto px-6 md:px-12 lg:px-20 mt-16"
                  >
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-500/10 backdrop-blur-sm rounded-3xl border border-orange-500/20 p-8 md:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 group hover:bg-orange-500/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">%100</div>
                <div className="text-base text-gray-300 font-semibold">Güvenilirlik</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 group hover:bg-orange-500/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                      </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">12,000+</div>
                <div className="text-base text-gray-300 font-semibold">Konut Projesi</div>
                    </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 group hover:bg-orange-500/30 transition-all duration-300 hover:scale-110">
                  <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">30+</div>
                <div className="text-base text-gray-300 font-semibold">Yıl Deneyim</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-orange-500/20 text-center">
              <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                <span className="font-bold text-orange-400">Türkiye'nin en büyük inşaat firmalarının</span> tercih ettiği, 
                güvenilir ve kaliteli catering hizmeti sunuyoruz. <span className="font-semibold text-white">Başarı hikayelerimiz güvenimizin temelidir.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

