
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-transparent text-gray-200">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<DetailPage type="game" />} />
            <Route path="/service/:id" element={<DetailPage type="service" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

const Header: React.FC = () => {
    const location = useLocation();

    const handleNavClick = (hash: string) => {
        if (location.pathname === '/') {
            // Use a slight delay to ensure the element is available after route change
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    };


  return (
    <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl shadow-2xl shadow-sky-500/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-orbitron font-bold neon-text-subtle text-sky-300 hover:neon-text transition-all duration-300">
          JBE
        </Link>
        <div className="space-x-4 md:space-x-8 text-sm md:text-base">
          <Link to="/#games" onClick={() => handleNavClick('#games')} className="hover:text-sky-300 hover:neon-text-subtle transition-colors duration-300">Games</Link>
          <Link to="/#services" onClick={() => handleNavClick('#services')} className="hover:text-sky-300 hover:neon-text-subtle transition-colors duration-300">Services</Link>
          <Link to="/#contact" onClick={() => handleNavClick('#contact')} className="hover:text-sky-300 hover:neon-text-subtle transition-colors duration-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/60 border-t border-sky-500/10 mt-20">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} JBE Gaming. All rights reserved.</p>
        <p className="text-sm mt-2">Power-Up Your Play with the best digital services.</p>
      </div>
    </footer>
  );
}

export default App;