'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: '',
    consent: false,
    marketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form gönderme işlemi burada yapılacak
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const cities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
    'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik',
    'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
    'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
    'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale',
    'Kırklareli', 'Kırşehir', 'Kilis', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
    'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye',
    'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şanlıurfa', 'Şırnak',
    'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold uppercase tracking-wider border border-orange-500/20">
                İletişim
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              TEKLİF İSTE
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Formunuzu doldurun, en kısa sürede sizinle iletişime geçerek,
              <br />
              ihtiyacınızı karşılayacak hizmeti ücretsiz olarak belirleyelim.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ad Soyad"
                  required
                  className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(000) 000 00 00"
                  required
                  className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* City Select */}
            <div>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '3rem'
                }}
              >
                <option value="">Şehir</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Açıklama"
                rows={5}
                required
                className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-4 text-white text-sm">
              <p className="leading-relaxed">
                Ürün, hizmet ve kampanyaların reklam amaçlı sunulabilmesi için kişisel verilerimin işlenmesine ve tarafıma tanıtım ve reklam içerikli ticari elektronik ileti gönderilmesine;
              </p>
              
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="consent"
                    value="accept"
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
                  />
                  <span className="group-hover:text-orange-400 transition-colors">İzin Veriyorum</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="consent"
                    value="decline"
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
                  />
                  <span className="group-hover:text-orange-400 transition-colors">İzin Vermiyorum</span>
                </label>
              </div>

              <p className="leading-relaxed pt-2">
                "Vereceğiniz kişisel bilgileriniz teklif verme sürecinde tarafımızca işlenecektir. Kişisel Verilerin Korunması Hakkında Bilgilendirme metnine{' '}
                <a href="#" className="text-orange-400 underline hover:text-orange-300">buradan</a> erişebilirsiniz."
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Formu Gönder
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

