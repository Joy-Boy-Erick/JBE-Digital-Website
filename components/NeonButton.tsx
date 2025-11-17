
import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-in-out border-2 border-sky-500 rounded-md group ${className}`}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-500/30 group-hover:w-full group-hover:h-full"></span>
      <span className="absolute inset-0 w-full h-full border-2 border-sky-600 rounded-md"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default NeonButton;
