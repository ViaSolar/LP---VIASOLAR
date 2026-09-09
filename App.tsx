import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ModalProvider } from './context/ModalContext';

// Landing Page Components
import { Home } from './pages/Home';
import { Obrigado } from './components/Obrigado';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ModalProvider>
      <div className="font-sans text-gray-800 bg-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {currentHash === '#obrigado' ? <Obrigado /> : <Home />}
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </ModalProvider>
  );
};

export default App;