import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DestinationImage from './components/DestinationImage';
import TitleSection from './components/TitleSection';
import ButtonSection from './components/ButtonSection';
import TextSection from './components/TextSection';
import ReviewSection from './components/ReviewSection';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import { destinationsData, Destination } from './data';

type View = 'landing' | 'destinations' | 'about';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('london');

  // Set dark mode by default for better aesthetics
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleSelectDestination = (id: string) => {
    setSelectedDestinationId(id);
    setCurrentView('destinations');
  };

  if (currentView === 'landing') {
    return <LandingPage onNavigate={() => setCurrentView('destinations')} />;
  }
  
  const currentDestination = destinationsData.find(d => d.id === selectedDestinationId) || destinationsData[0];

  const renderContent = () => {
    if (currentView === 'about') {
      return <AboutPage />;
    }
    
    // Default to destinations view
    return (
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          <DestinationImage imageUrl={currentDestination.image} altText={currentDestination.location} />
          <div className="p-6 md:p-8">
            <TitleSection title={currentDestination.name} location={currentDestination.location} />
            <ButtonSection />
            <TextSection description={currentDestination.description} />
            <ReviewSection reviews={currentDestination.reviews} />
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans antialiased">
      <Header 
        destinations={destinationsData}
        onSelectDestination={handleSelectDestination}
        onShowAbout={() => setCurrentView('about')}
        onShowHome={() => setCurrentView('destinations')}
      />
      {renderContent()}
    </div>
  );
};

export default App;