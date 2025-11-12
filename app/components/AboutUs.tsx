'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
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

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Güvenilir',
      description: 'Kurumsal güvence'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Kaliteli',
      description: 'Yüksek standartlar'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Hızlı',
      description: 'Zamanında teslimat'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Memnuniyet',
      description: 'Müşteri odaklı'
    }
  ];

  return (
    <section id="hakkimizda" className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider">
              Bizi Tanıyın
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Lezzeti{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Kurumsal Güvenle
            </span>
            <br />
            Sunuyoruz
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left - Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                <span className="font-bold text-orange-600">Atilgan Global</span>, kurulduğu günden bu yana{' '}
                <span className="font-semibold">inşaat, gıda, yemek ve tarım</span> alanlarında faaliyet gösteren; 
                güven, kalite ve sürdürülebilir başarı ilkeleriyle büyüyen bir şirkettir.
              </p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Profesyonel yönetim anlayışı ve güçlü kadrosuyla, kamu ve özel sektör projelerinde 
                çözüm odaklı hizmetler sunmaktadır.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-orange-500 mb-2">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Food Service Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Toplu yemek hizmetlerinde{' '}
                  <span className="font-bold text-orange-600">"tarladan çatala"</span> anlayışıyla 
                  gıda güvenliğini ön planda tutan firmamız, hijyenik koşullarda, lezzetli ve 
                  dengeli beslenme prensipleriyle üretim yapar.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Her aşamada kalite kontrol süreçlerini titizlikle uygulayarak, müşterilerine 
                  sadece bir yemek değil, <span className="font-semibold">sağlıklı bir yaşam deneyimi</span> sunmayı hedefler.
                </p>

                {/* Quotes */}
                <div className="space-y-4 pt-6 border-t border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="text-orange-500 text-3xl leading-none">"</div>
                    <p className="text-gray-800 font-medium italic pt-1">
                      Yemek sadece karın doyurmak değildir.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-orange-500 text-3xl leading-none">"</div>
                    <p className="text-gray-800 font-medium italic pt-1">
                      Her tabakta kalite, her öğünde özen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-orange-600">Atilgan Global</span>, hizmet verdiği kurum ve 
                kuruluşlarda koşulsuz müşteri memnuniyetini esas alır. Uzman kadrosu, teknolojik altyapısı 
                ve çözüm gücüyle, gerek yerinde üretim gerekse taşıma usulü yemek hizmetlerinde sektörde 
                <span className="font-semibold"> fark yaratmaktadır</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          {/* Projects Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Devam Eden{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Projelerimiz
              </span>
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Atilgan Global, Türkiye'nin farklı illerinde yürüttüğü büyük ölçekli toplu konut 
              projeleriyle de faaliyet alanını genişletmektedir.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Location Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">
                      {project.location}
                    </h4>
                  </div>
                </div>

                {/* Units */}
                <div className="mb-4">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-orange-500">
                      {project.units}
                    </span>
                    <span className="text-gray-600 font-medium">Konut</span>
                  </div>
                </div>

                {/* Contractor */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{project.contractor}</span>
                </div>

                {/* Hover Effect Line */}
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
            className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
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
        </motion.div>
      </div>
    </section>
  );
}

