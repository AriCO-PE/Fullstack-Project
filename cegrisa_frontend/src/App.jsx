import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';
import PromoBar from './components/PromoBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <PromoBar />
      <Header scrolled={scrolled} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
