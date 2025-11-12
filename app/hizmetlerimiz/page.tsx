'use client';

import { motion } from 'framer-motion';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HizmetlerimizPage() {
  const services = [
    {
      id: 1,
      title: 'Toplu Yemek',
      subtitle: 'Şantiyeler ve Toplu Yaşam Alanları için',
      description: 'Şantiyeler, fabrikalar ve toplu yaşam alanları için günlük taze ve lezzetli yemek hizmeti sunuyoruz. Hijyenik koşullarda hazırlanan menülerimiz, çalışanlarınızın günlük enerji ihtiyacını karşılamak için dengeli ve besleyici içeriklerden oluşur.',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/topluyemek.jpg',
      features: [
        'Günlük taze menüler',
        'Hijyenik üretim koşulları',
        'Dengeli ve besleyici içerik',
        'Zamanında teslimat',
        'Esnek servis seçenekleri'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Organizasyon Yemek',
      subtitle: 'Özel Etkinlikler ve Davetler',
      description: 'Düğün, nişan, toplantı, açılış ve özel davetleriniz için profesyonel catering hizmeti sunuyoruz. Deneyimli şeflerimiz ve servis ekibimizle etkinliğinizi unutulmaz kılıyoruz.',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/organizasyon.jpg',
      features: [
        'Özel menü planlama',
        'Profesyonel servis ekibi',
        'Dekorasyon ve sunum',
        'Esnek organizasyon seçenekleri',
        'Deneyimli şefler'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Kafeterya Kantin',
      subtitle: 'İşyeri Kafeterya Yönetimi',
      description: 'İşletmeniz için modern kafeterya ve kantin yönetimi hizmeti sunuyoruz. Çalışanlarınız için sağlıklı atıştırmalıklar, içecekler ve öğünlerle iş yerinizde konfor sağlıyoruz.',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/kafeterya.jpg',
      features: [
        'Modern kafeterya konsepti',
        'Sağlıklı atıştırmalıklar',
        'Çeşitli içecek seçenekleri',
        'Hızlı servis',
        'Ekonomik fiyatlar'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Yerinde Üretim',
      subtitle: 'Lokasyonunuzda Taze Üretim',
      description: 'Lokasyonunuzda profesyonel mutfak kurulumu ve yerinde üretim hizmeti sunuyoruz. Taze ve sıcak yemekler, hijyenik ortamda hazırlanarak servis edilir.',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/yerinde%C3%BCretim.jpg',
      features: [
        'Profesyonel mutfak kurulumu',
        'Taze ve sıcak yemekler',
        'Hijyenik üretim ortamı',
        'Deneyimli mutfak ekibi',
        'Tam kontrol ve şeffaflık'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Kutu Yemek',
      subtitle: 'Pratik ve Hijyenik Paket Çözümler',
      description: 'Pratik ve hijyenik paket yemek çözümleri sunuyoruz. Özel ambalajlı menülerimiz, tazeliğini ve sıcaklığını koruyarak size ulaşır.',
      image: 'https://villaqrmenu.b-cdn.net/atilgancatering/kutuyemek.jpg',
      features: [
        'Özel ambalaj',
        'Tazelik garantisi',
        'Pratik taşıma',
        'Çeşitli menü seçenekleri',
        'Hızlı teslimat'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  const whyChooseUs = [
    {
      title: 'Kalite Garantisi',
      description: 'En yüksek kalite standartlarında hizmet sunuyoruz',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Hijyen Standartları',
      description: 'ISO ve gıda güvenliği sertifikalarıyla üretim',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Tecrübeli Kadro',
      description: '30+ yıllık tecrübe ve uzman ekip',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Esnek Çözümler',
      description: 'İhtiyacınıza özel esnek hizmet seçenekleri',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20">
      {/* Animated Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/15 to-orange-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/10 to-orange-300/8 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-orange-300/8 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative bg-transparent">
        <TopHeader />
        <Header />
        
        {/* Hero Section */}
        <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center z-10">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://www.elityemek.com.tr/wp-content/uploads/2024/12/catering.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/70"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
                <a href="/" className="hover:text-orange-400 transition-colors">Ana Sayfa</a>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white font-medium">Hizmetlerimiz</span>
              </div>

              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Hizmetlerimiz
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Profesyonel
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Catering Çözümleri
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                İhtiyacınıza özel, kaliteli ve hijyenik yemek hizmetleri ile işinizi kolaylaştırıyoruz. 
                30 yılı aşkın tecrübemizle yanınızdayız.
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Services Detailed Sections */}
      <div id="services" className="relative z-10">
        {services.map((service, index) => (
          <section 
            key={service.id}
            className={`py-20 md:py-32 ${
              index % 2 === 0 ? 'bg-transparent' : 'bg-white/30 backdrop-blur-sm'
            }`}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`${index % 2 === 0 ? '' : 'lg:order-2'}`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shadow-2xl">
                        <span className="text-white text-2xl font-bold">{service.id}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`${index % 2 === 0 ? '' : 'lg:order-1'}`}
                >
                  <div className="mb-6">
                    <div className="text-orange-500 mb-4">
                      {service.icon}
                    </div>
                    <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                      {service.subtitle}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/#iletisim"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 group"
                  >
                    Teklif Al
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Neden{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Atilgan Global
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Sektördeki tecrübemiz ve kalite anlayışımızla fark yaratıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hizmetlerimiz Hakkında Daha Fazla Bilgi Almak İster misiniz?
            </h2>
            <p className="text-xl md:text-2xl text-orange-50 mb-8 max-w-3xl mx-auto">
              Uzman ekibimiz size özel çözümler sunmak için hazır
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#iletisim"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-orange-600 font-bold rounded-xl shadow-2xl hover:bg-gray-50 hover:shadow-3xl transition-all duration-300 text-lg"
              >
                Hemen İletişime Geç
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+905551234567"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-orange-700 text-white font-bold rounded-xl shadow-xl hover:bg-orange-800 transition-all duration-300 text-lg border-2 border-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bizi Arayın
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

