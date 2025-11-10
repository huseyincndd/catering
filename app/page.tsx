import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Expectations from './components/Expectations';
import Stats from './components/Stats';
import Standards from './components/Standards';
import SupplierCTA from './components/SupplierCTA';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <TopHeader />
        <Header />
        <Hero />
      </div>
      
      <Services />
      <Expectations />
      <Stats />
      <Standards />
      <SupplierCTA />
      <ContactForm />
    </div>
  );
}
