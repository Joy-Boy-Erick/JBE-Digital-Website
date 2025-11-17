
import React from 'react';
import { games } from '../data/games';
import { services } from '../data/services';
import Card from '../components/Card';
import FloatingIcons from '../components/FloatingIcons';
import { FacebookIcon, TelegramIcon, WhatsAppIcon } from '../components/icons';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <section id="games" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-orbitron mb-12">
            <span className="neon-text-subtle">Game</span> Top-Ups
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <Card
                key={game.id}
                to={`/game/${game.id}`}
                imageUrl={game.imageUrl}
                title={game.title}
                description={game.description}
                buttonText="Top-Up Now"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-950/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center font-orbitron mb-12">
            <span className="neon-text-subtle">Digital</span> Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                to={`/service/${service.id}`}
                icon={<service.icon className="w-24 h-24" />}
                title={service.title}
                description={service.description}
                buttonText="View Service"
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};


const HeroSection: React.FC = () => {
    return (
      <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden px-4">
        <FloatingIcons />
        <div className="relative z-10 flex flex-col items-center">
            
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* The Ring */}
            <div className="absolute inset-0 rounded-full border-[4px] md:border-[6px] border-sky-400 neon-ring animate-pulse"></div>

             {/* Inner chaotic lines */}
             <svg className="absolute inset-0 w-full h-full opacity-30" width="100%" height="100%">
              <defs>
                <filter id="glitch">
                  <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="turbulence" />
                  <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
              <circle cx="50%" cy="50%" r="45%" stroke="rgba(14, 165, 233, 0.5)" strokeWidth="1" fill="none" style={{filter: 'url(#glitch)'}} />
            </svg>

            {/* JBE Text */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-orbitron neon-text z-10 select-none">
              JBE
            </h1>
            
            {/* Curved Text Container */}
            <div className="absolute inset-0 w-full h-full font-orbitron tracking-widest uppercase text-sky-300">
              <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slow">
                <defs>
                  <path id="circlePath" fill="transparent" d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" />
                </defs>
                <text dy="-10" className="text-lg sm:text-xl md:text-2xl fill-current neon-text-subtle select-none">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    GAMING TOP-UP
                  </textPath>
                </text>
                <text dy="-10" className="text-lg sm:text-xl md:text-2xl fill-current neon-text-subtle select-none">
                  <textPath xlinkHref="#circlePath" startOffset="50%">
                    DIGITAL SERVICES
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <p className="mt-8 text-base md:text-xl text-gray-300 tracking-wider">
            POWER-UP YOUR PLAY
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    );
  };

  const ContactSection: React.FC = () => {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-orbitron mb-4">
            <span className="neon-text-subtle">Connect</span> With Us
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Have questions or need support? Our team is here to help you power-up your play. Reach out to us through any of our channels.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <SocialLink
              href="https://www.facebook.com/" 
              icon={<FacebookIcon className="w-8 h-8" />}
              platform="Facebook"
              actionText="Visit Our Page"
            />
            <SocialLink
              href="https://t.me/"
              icon={<TelegramIcon className="w-8 h-8" />}
              platform="Telegram"
              actionText="Message Us"
            />
            <SocialLink
              href="https://wa.me/"
              icon={<WhatsAppIcon className="w-8 h-8" />}
              platform="WhatsApp"
              actionText="Chat With Us"
            />
          </div>
  
          <div className="text-gray-500">
              <p>Support Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
              <p>Email: <a href="mailto:support@jbe.gaming" className="text-sky-400 hover:underline">support@jbe.gaming</a></p>
          </div>
        </div>
      </section>
    );
  };
  
  interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    platform: string;
    actionText: string;
  }
  
  const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, platform, actionText }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center p-6 bg-slate-950/60 backdrop-blur-sm rounded-lg border border-sky-500/20 transition-all duration-300 ease-in-out hover:border-sky-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20"
    >
      <div className="absolute top-0 left-0 w-full h-full neon-box opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 text-sky-400 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="relative z-10 mt-4 text-xl font-semibold font-orbitron">{platform}</span>
      <span className="relative z-10 mt-1 text-gray-300 group-hover:text-sky-300 transition-colors duration-300">{actionText}</span>
    </a>
  );

export default HomePage;