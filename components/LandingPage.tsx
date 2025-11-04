import React from 'react';

interface LandingPageProps {
  onNavigate: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div 
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/travel/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Explore Mundo
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Viagens e suas belezas
        </p>
        <button
          onClick={onNavigate}
          className="mt-12 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Clique aqui para ver os destinos e avaliações
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
