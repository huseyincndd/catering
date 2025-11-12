'use client';

import { motion } from 'framer-motion';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MenulerPage() {
  const menuData = [
    {
      day: 'Pazartesi',
      lunch: {
        soup: 'Tarhana Çorba',
        main: 'Tepsi Kebabı',
        side: 'Mısırlı Pirinç Pilavı',
        extra: 'İçecek'
      },
      dinner: {
        soup: 'Yayla Çorba',
        main: 'Tavuk Schnitzel + Biber',
        side: 'Peynirli Makarna',
        extra: 'Meyve'
      }
    },
    {
      day: 'Salı',
      lunch: {
        soup: 'Mercimek Çorba',
        main: 'Tavuk Sote',
        side: 'Garnitürlü Pirinç Pilavı',
        extra: 'Salata'
      },
      dinner: {
        soup: 'Ezogelin Çorba',
        main: 'Arap Tava',
        side: 'Müceddere Pilavı',
        extra: 'Tatlı'
      }
    },
    {
      day: 'Çarşamba',
      lunch: {
        soup: 'Nohut Sulu',
        main: '',
        side: 'Şehriyeli Bulgur Pilavı',
        extra: 'Turşu - Soğan - Cacık'
      },
      dinner: {
        soup: 'Tarhana Çorba',
        main: 'Tavuk Döner + Patates',
        side: 'Şehriyeli Pirinç Pilavı',
        extra: 'Pembe Sultan'
      }
    },
    {
      day: 'Perşembe',
      lunch: {
        soup: 'Mercimek Çorba',
        main: 'Fırında Tavuk Baget',
        side: 'Mısırlı Pirinç Pilavı',
        extra: 'Komposto'
      },
      dinner: {
        soup: 'Yayla Çorba',
        main: 'Patates Oturtma',
        side: 'Şehriyeli Bulgur Pilavı',
        extra: 'Salata'
      }
    },
    {
      day: 'Cuma',
      lunch: {
        soup: 'Tarhana Çorba',
        main: 'Lahmacun + Piyaz',
        side: 'Meyhane Pilavı',
        extra: 'İçecek'
      },
      dinner: {
        soup: 'Tavuk Suyu Çorba',
        main: 'Biber Dolma',
        side: 'Soslu Makarna',
        extra: 'Yoğurt'
      }
    },
    {
      day: 'Cumartesi',
      lunch: {
        soup: 'Ezogelin Çorba',
        main: 'Karnıyarık',
        side: 'Yoğurtlu Mantı',
        extra: 'Meyve'
      },
      dinner: {
        soup: 'Kuru Fasulye',
        main: '',
        side: 'Şehriyeli Pirinç Pilavı',
        extra: 'Turşu - Soğan - Cacık'
      }
    },
    {
      day: 'Pazar',
      lunch: {
        soup: 'Mercimek Çorba',
        main: 'Sebzeli Misket Köfte',
        side: 'Şehriyeli Pirinç Pilavı',
        extra: 'Tatlı'
      },
      dinner: {
        soup: 'Tarhana Çorba',
        main: 'Karışık Kızartma',
        side: 'Soslu Spagetti',
        extra: 'Yoğurt'
      }
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Hijyen Garantili',
      description: 'Avrupa standartlarında üretim'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Dengeli Beslenme',
      description: 'Diyetisyen onaylı menüler'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Her Gün Taze',
      description: 'Günlük taze malzeme kullanımı'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: 'Lezzetli Tarifler',
      description: 'Uzman aşçılar tarafından hazırlanır'
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
              backgroundImage: 'url(https://villaqrmenu.b-cdn.net/atilgancatering/topluyemek.jpg)',
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
                <span className="text-white font-medium">Menüler</span>
              </div>

              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Menülerimiz
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Haftalık
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Örnek Menü
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
                Diyetisyen onaylı, dengeli ve lezzetli menülerimizle her gün sağlıklı beslenin. 
                Tüm yemeklerimiz günlük taze malzemelerle hazırlanır.
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Haftalık{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Menü Programı
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her gün öğle ve akşam olmak üzere iki öğün sıcak yemek servisi
            </p>
          </motion.div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuData.map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold text-center">{menu.day}</h3>
                </div>

                {/* Menu Content */}
                <div className="p-6">
                  {/* Lunch */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <h4 className="font-bold text-gray-900 text-lg">Öğle</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700">{menu.lunch.soup}</span>
                      </div>
                      {menu.lunch.main && (
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-gray-700 font-medium">{menu.lunch.main}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700">{menu.lunch.side}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-600 italic text-xs">{menu.lunch.extra}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4"></div>

                  {/* Dinner */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      <h4 className="font-bold text-gray-900 text-lg">Akşam</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700">{menu.dinner.soup}</span>
                      </div>
                      {menu.dinner.main && (
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-gray-700 font-medium">{menu.dinner.main}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700">{menu.dinner.side}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-600 italic text-xs">{menu.dinner.extra}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-orange-900">Önemli Not</h3>
            </div>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Tedarik zincirinde veya yaşanabilecek teknik sorunlar nedeniyle menüde ani değişiklikler yapılma 
              ihtimali söz konusudur. Menülerimiz diyetisyen onaylıdır ve düzenli olarak güncellenmektedir. 
              Anlayışınız için teşekkür ederiz.
            </p>

            {/* Signatures */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-orange-200">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900 mb-1">Diyetisyen</div>
                <div className="text-sm text-gray-600">Şeyma GÜLİSTAN</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900 mb-1">Koordinatör</div>
                <div className="text-sm text-gray-600">Sedat MEYVECİ</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900 mb-1">İdari Yönetim</div>
                <div className="text-sm text-gray-600">YCG & NİŞANTAŞI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Catering Hizmetimizden Yararlanın
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Şantiyeniz veya işletmeniz için özel menü hazırlatmak ister misiniz?
            </p>
            <a
              href="/#iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300"
            >
              Hemen Teklif Alın
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

