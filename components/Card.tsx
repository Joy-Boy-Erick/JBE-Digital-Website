
import React from 'react';
import { Link } from 'react-router-dom';
import NeonButton from './NeonButton';

interface CardProps {
  to: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ to, imageUrl, icon, title, description, buttonText }) => {
  return (
    <Link to={to} className="block group">
      <div className="relative overflow-hidden bg-slate-950/60 backdrop-blur-sm rounded-lg h-full border border-sky-500/20 p-1 transition-all duration-300 ease-in-out group-hover:border-sky-400/50 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-sky-500/20">
        <div className="absolute top-0 left-0 w-full h-full neon-box opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col h-full">
          {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-md" />
          )}
          {icon && (
            <div className="w-full h-40 flex items-center justify-center text-sky-400">
              {icon}
            </div>
          )}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-bold font-orbitron text-sky-300 group-hover:neon-text-subtle transition-all duration-300">{title}</h3>
            <p className="text-gray-400 mt-2 flex-grow">{description}</p>
            <div className="mt-4">
               <NeonButton className="w-full text-sm py-2">{buttonText}</NeonButton>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
