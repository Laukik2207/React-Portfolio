import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ScanlineOverlay from './components/ScanlineOverlay';
import HeroScreen from './screens/HeroScreen';
import ProfileScreen from './screens/ProfileScreen';
import StatsScreen from './screens/StatsScreen';
import QuestScreen from './screens/QuestScreen';
import GuildScreen from './screens/GuildScreen';
import ContactScreen from './screens/ContactScreen';
import BootScreen from './screens/BootScreen';

const SCREENS = ['BOOT', 'HERO', 'PROFILE', 'STATS', 'QUESTS', 'GUILD', 'CONTACT'];

function App() {
  const [currentScreen, setCurrentScreen] = useState('BOOT');

  const currentIndex = SCREENS.indexOf(currentScreen);

  const goToNext = () => {
    if (currentIndex < SCREENS.length - 1) {
      setCurrentScreen(SCREENS[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentScreen(SCREENS[currentIndex - 1]);
    }
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case 'BOOT': return <BootScreen key="boot" onNext={goToNext} />;
      case 'HERO': return <HeroScreen key="hero" onNext={goToNext} />;
      case 'PROFILE': return <ProfileScreen key="profile" onNext={goToNext} onPrev={goToPrev} />;
      case 'STATS': return <StatsScreen key="stats" onNext={goToNext} onPrev={goToPrev} />;
      case 'QUESTS': return <QuestScreen key="quests" onNext={goToNext} onPrev={goToPrev} />;
      case 'GUILD': return <GuildScreen key="guild" onNext={goToNext} onPrev={goToPrev} />;
      case 'CONTACT': return <ContactScreen key="contact" onPrev={goToPrev} />;
      default: return <HeroScreen key="hero" onNext={goToNext} />;
    }
  };

  return (
    <div className="w-screen h-screen bg-bg text-text font-retro overflow-hidden relative selection:bg-white selection:text-black">
      <ScanlineOverlay />
      
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>

      {/* Navigation Bar */}
      {currentScreen !== 'HERO' && currentScreen !== 'BOOT' && (
        <div className="fixed bottom-0 left-0 w-full border-t-2 border-border bg-black z-[100] flex overflow-x-auto scrolbar-hide">
          {SCREENS.filter(s => s !== 'BOOT' && s !== 'HERO').map(screen => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`flex-1 min-w-[100px] py-4 md:py-5 font-retro text-[8px] md:text-[10px] text-center uppercase transition-colors shrink-0 ${
                currentScreen === screen 
                  ? 'bg-white text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' 
                  : 'bg-black text-muted hover:bg-[#111] hover:text-white'
              }`}
            >
              [{screen}]
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
