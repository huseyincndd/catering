import type { Metadata } from 'next';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Expectations from './components/Expectations';
import Stats from './components/Stats';
import References from './components/References';
import Standards from './components/Standards';
import SupplierCTA from './components/SupplierCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "Atilgan Global Catering ile şantiyeler ve kurumsal projeler için hijyenik, sürdürülebilir toplu yemek çözümlerini keşfedin.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20">
      {/* Animated Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/15 to-orange-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-orange-400/10 to-orange-300/8 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-orange-300/8 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Food Icons - Only on Left & Right Sides */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* LEFT SIDE ICONS */}
        {/* Top Left - Plate */}
        <div className="absolute top-[8%] left-[3%] text-orange-500/7 animate-float" style={{ animationDelay: '0s' }}>
          <svg className="w-20 h-20 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth="2"/>
            <circle cx="12" cy="12" r="6" strokeWidth="2"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        {/* Upper Left - Fork & Knife */}
        <div className="absolute top-[22%] left-[5%] text-orange-400/8 animate-float-slow" style={{ animationDelay: '2s' }}>
          <svg className="w-18 h-18 md:w-22 md:h-22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
          </svg>
        </div>

        {/* Middle Left - Chef Hat */}
        <div className="absolute top-[38%] left-[2%] text-orange-300/9 animate-float" style={{ animationDelay: '3.5s' }}>
          <svg className="w-24 h-24 md:w-28 md:h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 1.5c-1.88 0-3.42 1.48-3.49 3.34-.71.23-1.37.61-1.94 1.11C6.41 6.5 6 7.44 6 8.5c0 1.18.51 2.24 1.32 2.99V18h10.36v-6.51C18.49 10.74 19 9.68 19 8.5c0-1.06-.41-2-.97-2.55-.57-.5-1.23-.88-1.94-1.11C16.02 2.98 14.48 1.5 12.5 1.5zM7 19v1.5h11V19H7z"/>
          </svg>
        </div>

        {/* Lower Middle Left - Coffee Cup */}
        <div className="absolute top-[55%] left-[4%] text-orange-500/6 animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <svg className="w-20 h-20 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
          </svg>
        </div>

        {/* Lower Left - Bowl */}
        <div className="absolute top-[70%] left-[6%] text-orange-400/7 animate-float" style={{ animationDelay: '4s' }}>
          <svg className="w-22 h-22 md:w-26 md:h-26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M3 12c0 4.97 4.03 9 9 9s9-4.03 9-9M3 12h18M3 12C3 7.58 6.58 4 11 4h2c4.42 0 8 3.58 8 8"/>
            <path strokeWidth="2" d="M12 21v-3"/>
          </svg>
        </div>

        {/* Bottom Left - Apple/Fruit */}
        <div className="absolute top-[85%] left-[3%] text-orange-300/8 animate-float-slow" style={{ animationDelay: '2.5s' }}>
          <svg className="w-20 h-20 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.5 6c-1.21 0-2.31.5-3.1 1.29l-.4.4-.4-.4C12.81 8.5 11.71 8 10.5 8 7.47 8 5 10.47 5 13.5S7.47 19 10.5 19c1.21 0 2.31-.5 3.1-1.29l.4-.4.4.4c.79.79 1.89 1.29 3.1 1.29 3.03 0 5.5-2.47 5.5-5.5S20.53 8 17.5 8z"/>
          </svg>
        </div>

        {/* RIGHT SIDE ICONS */}
        {/* Top Right - Utensils Crossed */}
        <div className="absolute top-[6%] right-[4%] text-orange-500/8 animate-float-slow" style={{ animationDelay: '0.8s' }}>
          <svg className="w-24 h-24 md:w-28 md:h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M16 2v8M11 7l5-5 5 5M8 2v8c0 2.21 1.79 4 4 4M8 2h.01M9 2h.01M7 2h.01M12 14v8M16 22v-8"/>
          </svg>
        </div>

        {/* Upper Right - Wine Glass */}
        <div className="absolute top-[20%] right-[3%] text-orange-400/7 animate-float" style={{ animationDelay: '3s' }}>
          <svg className="w-20 h-20 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm10 5H8V5h8v3z"/>
          </svg>
        </div>

        {/* Middle Upper Right - Pizza */}
        <div className="absolute top-[35%] right-[5%] text-orange-300/9 animate-float-slow" style={{ animationDelay: '1.2s' }}>
          <svg className="w-22 h-22 md:w-26 md:h-26" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.54 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
        </div>

        {/* Middle Right - Cloche (Serving Dome) */}
        <div className="absolute top-[48%] right-[2%] text-orange-500/6 animate-float" style={{ animationDelay: '4.5s' }}>
          <svg className="w-24 h-24 md:w-28 md:h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M5 20h14M5 20v-1M19 20v-1M12 4v1M19 19c0-3.87-3.13-7-7-7s-7 3.13-7 7"/>
            <circle cx="12" cy="4" r="1" fill="currentColor"/>
          </svg>
        </div>

        {/* Lower Middle Right - Birthday Cake */}
        <div className="absolute top-[62%] right-[6%] text-orange-400/8 animate-float-slow" style={{ animationDelay: '2.8s' }}>
          <svg className="w-20 h-20 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/>
          </svg>
        </div>

        {/* Lower Right - Hot Beverage */}
        <div className="absolute top-[78%] right-[4%] text-orange-300/7 animate-float" style={{ animationDelay: '0.5s' }}>
          <svg className="w-22 h-22 md:w-26 md:h-26" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
            <path d="M8 1h2v2H8zM12 1h2v2h-2zM16 1h2v2h-2z"/>
          </svg>
        </div>

        {/* Bottom Right - Restaurant */}
        <div className="absolute top-[90%] right-[5%] text-orange-500/8 animate-float-slow" style={{ animationDelay: '3.8s' }}>
          <svg className="w-20 h-20 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03c2.09-.13 3.75-1.85 3.75-3.97V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <div className="relative">
          <TopHeader />
          <Header />
          <Hero />
        </div>
        
        <OurServices />
        <AboutUs />
        <Services />
        <Expectations />
        <Stats />
        <References />
        <Standards />
        <SupplierCTA />
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
}
