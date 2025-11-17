import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';
import { services } from '../data/services';
import { Game, Service, PriceOption } from '../types';
import NeonButton from '../components/NeonButton';
import { ArrowUpIcon } from '../components/icons';

interface DetailPageProps {
  type: 'game' | 'service';
}

const DetailPage: React.FC<DetailPageProps> = ({ type }) => {
  const { id } = useParams<{ id: string }>();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const data: Game | Service | undefined = type === 'game' 
    ? games.find(g => g.id === id) 
    : services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!data) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">Not Found</h1>
        <p className="mt-4">The requested {type} could not be found.</p>
        <Link to="/" className="mt-8 inline-block">
          <NeonButton>Go Back Home</NeonButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div 
        className="h-64 md:h-80 bg-cover bg-center relative flex items-center justify-center" 
        style={{ backgroundImage: `url(${data.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative text-5xl md:text-7xl font-bold font-orbitron neon-text z-10 text-center">{data.title}</h1>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 p-8 rounded-lg border border-sky-500/20">
            <h2 className="text-3xl font-bold font-orbitron text-sky-300 mb-4">Description</h2>
            <p className="text-gray-300 leading-relaxed">{data.longDescription}</p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold font-orbitron text-sky-300 mb-8 text-center">Available Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {data.prices.map((option, index) => (
                <PriceCard key={index} option={option} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-slate-950/70 backdrop-blur-sm rounded-full border-2 border-sky-500 text-sky-400 hover:bg-sky-500/20 hover:border-sky-400 transition-all duration-300 shadow-lg shadow-sky-500/20 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

const PriceCard: React.FC<{ option: PriceOption }> = ({ option }) => (
    <div className="group relative bg-slate-900/50 border border-sky-500/20 rounded-lg text-center overflow-hidden transition-all duration-300 hover:border-sky-400 hover:-translate-y-3 hover:scale-[1.08] hover:shadow-[0_0_40px_theme(colors.sky.400)] cursor-pointer flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full neon-box opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col flex-grow">
        {option.imageUrl && (
            <img src={option.imageUrl} alt={option.name} className="w-full h-28 object-cover" />
        )}
        <div className="p-4 flex flex-col flex-grow">
            <div className="flex-grow">
                <p className="text-lg font-semibold text-gray-200">{option.name}</p>
                <p className="text-2xl font-bold text-sky-400 mt-2">{option.price}</p>
            </div>
            <div className="mt-4">
                <NeonButton className="w-full text-sm py-2">Select</NeonButton>
            </div>
        </div>
      </div>
    </div>
  );
  

export default DetailPage;