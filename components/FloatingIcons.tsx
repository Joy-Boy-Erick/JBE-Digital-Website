
import React from 'react';
import { GoldCoinIcon, GameControllerIcon, LightningIcon, MonitorIcon, PhoneIcon } from './icons';

const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: GameControllerIcon, className: 'top-[15%] left-[10%] w-8 h-8 opacity-20 floating text-sky-300', style: { animationDuration: '8s' } },
    { Icon: PhoneIcon, className: 'top-[20%] right-[12%] w-6 h-6 opacity-20 floating text-sky-300', style: { animationDuration: '6s', animationDelay: '1s' } },
    { Icon: LightningIcon, className: 'bottom-[15%] left-[15%] w-5 h-5 opacity-20 floating text-sky-300', style: { animationDuration: '7s', animationDelay: '2s' } },
    { Icon: MonitorIcon, className: 'bottom-[20%] right-[10%] w-8 h-8 opacity-20 floating text-sky-300', style: { animationDuration: '9s', animationDelay: '0.5s' } },
    
    // Coins
    { Icon: GoldCoinIcon, className: 'top-[10%] left-[30%] w-10 h-10 floating-coin', style: { animationDuration: '7s' } },
    { Icon: GoldCoinIcon, className: 'top-[50%] left-[5%] w-8 h-8 floating-coin', style: { animationDuration: '9s', animationDelay: '2s' } },
    { Icon: GoldCoinIcon, className: 'top-[10%] right-[25%] w-6 h-6 floating-coin', style: { animationDuration: '8s', animationDelay: '1s' } },
    { Icon: GoldCoinIcon, className: 'bottom-[5%] right-[50%] w-9 h-9 floating-coin', style: { animationDuration: '6s', animationDelay: '3s' } },
    { Icon: GoldCoinIcon, className: 'bottom-[25%] left-[25%] w-5 h-5 floating-coin', style: { animationDuration: '10s', animationDelay: '1.5s' } },
    { Icon: GoldCoinIcon, className: 'bottom-[10%] right-[20%] w-11 h-11 floating-coin', style: { animationDuration: '7s', animationDelay: '2.5s' } },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <div key={index} className={`absolute ${item.className}`} style={item.style}>
          <item.Icon />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
