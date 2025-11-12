'use client';

import { motion } from 'framer-motion';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function KurumsalPage() {
  const projects = [
    { location: 'Hatay Hassa', units: 1754, contractor: 'Yılkanur A.Ş' },
    { location: 'İstanbul Arnavutköy', units: 1584, contractor: 'Yılkanur A.Ş' },
    { location: 'Malatya Battalgazi', units: 1014, contractor: 'Yılkanur A.Ş' },
    { location: 'Hatay İskenderun', units: 809, contractor: 'Can İnşaat A.Ş' },
    { location: 'Hatay Ekinci', units: 668, contractor: 'Atlantik Grup A.Ş' },
    { location: 'Kahramanmaraş Nurhak', units: 624, contractor: 'Aydur İnşaat' },
    { location: 'Hatay Antakya', units: 588, contractor: 'Yılkanur A.Ş' },
    { location: 'Hatay Antakya', units: 568, contractor: 'Nişantaşı İnşaat' },
    { location: 'Hatay Kırıkhan', units: 548, contractor: 'Tekon İnşaat' }
  ];

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Güven',
      description: 'Kurumsal yapımız ve şeffaf iş süreçlerimizle müşterilerimize tam güven sağlıyoruz.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında hizmet sunarak, mükemmelliği hedefliyoruz.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sürdürülebilirlik',
      description: 'Çevre dostu yaklaşımlarla gelecek nesillere daha yaşanabilir bir dünya bırakıyoruz.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'İnsan Odaklı',
      description: 'Çalışanlarımızın ve müşterilerimizin memnuniyetini ön planda tutuyoruz.'
    }
  ];

  const timeline = [
    {
      year: '1993',
      title: 'Kuruluş',
      description: 'Atilgan Global, gıda ve yemek hizmetleri sektöründe faaliyete başladı.'
    },
    {
      year: '2000',
      title: 'Büyüme',
      description: 'İnşaat ve tarım sektörlerine yatırım yaparak faaliyet alanını genişletti.'
    },
    {
      year: '2010',
      title: 'Kurumsal Yapılanma',
      description: 'Profesyonel yönetim kadrosu ile kurumsal yapıya geçiş sağlandı.'
    },
    {
      year: '2020',
      title: 'Büyük Ölçekli Projeler',
      description: 'Türkiye genelinde toplu konut projelerine başlandı.'
    },
    {
      year: '2025',
      title: 'Liderlik',
      description: 'Sektörde lider konuma ulaşarak 8.000+ konut projesine hizmet veriyor.'
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
                <span className="text-white font-medium">Kurumsal</span>
              </div>

              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Kurumsal
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Atilgan Global
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Catering Services
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                30 yılı aşkın tecrübemizle, güven, kalite ve sürdürülebilir başarı ilkeleriyle büyüyen bir şirketiz.
                İnşaat, gıda, yemek ve tarım alanlarında profesyonel hizmetler sunuyoruz.
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Company Introduction */}
        <section className="py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Lezzeti{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Kurumsal Güvenle
                  </span>
                  {' '}Sunuyoruz
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <span className="font-bold text-orange-600">Atilgan Global</span>, kurulduğu günden bu yana{' '}
                    <span className="font-semibold">inşaat, gıda, yemek ve tarım</span> alanlarında faaliyet gösteren; 
                    güven, kalite ve sürdürülebilir başarı ilkeleriyle büyüyen bir şirkettir.
                  </p>
                  <p>
                    Profesyonel yönetim anlayışı ve güçlü kadrosuyla, kamu ve özel sektör projelerinde 
                    çözüm odaklı hizmetler sunmaktadır.
                  </p>
                  <p>
                    Toplu yemek hizmetlerinde{' '}
                    <span className="font-bold text-orange-600">"tarladan çatala"</span> anlayışıyla 
                    gıda güvenliğini ön planda tutan firmamız, hijyenik koşullarda, lezzetli ve 
                    dengeli beslenme prensipleriyle üretim yapar.
                  </p>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://www.elityemek.com.tr/wp-content/uploads/2024/12/catering.webp"
                    alt="Atilgan Global"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-1">30+</div>
                    <div className="text-sm text-gray-600 font-medium">Yıllık Tecrübe</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Kurumsal{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Değerlerimiz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                İş yapış şeklimizi ve kararlarımızı şekillendiren temel prensiplerimiz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
                >
                  <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 md:py-32 bg-transparent">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Tarihçemiz &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Yolculuğumuz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                1993 yılından bugüne uzanan başarı hikayemiz
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 md:text-right md:pr-8" style={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 ${
                        index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                      }`}>
                        <div className="text-5xl font-bold text-orange-500 mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:block relative z-10">
                      <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 md:py-32 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Devam Eden{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Projelerimiz
                </span>
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Türkiye'nin farklı illerinde yürüttüğümüz büyük ölçekli toplu konut projeleri
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">
                        {project.location}
                      </h4>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-orange-500">
                        {project.units}
                      </span>
                      <span className="text-gray-600 font-medium">Konut</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{project.contractor}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                </motion.div>
              ))}
            </div>

            {/* Total Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {projects.reduce((sum, p) => sum + p.units, 0).toLocaleString()}
                  </div>
                  <div className="text-orange-100 text-lg font-medium">Toplam Konut</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">{projects.length}</div>
                  <div className="text-orange-100 text-lg font-medium">Aktif Proje</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">30+</div>
                  <div className="text-orange-100 text-lg font-medium">Yıllık Tecrübe</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

