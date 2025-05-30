import React from 'react';
import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App bg-green min-h-screen"> {/* Added bg-black and min-h-screen classes */}
      <GridBackground />
      <Hero name="Dishang" />
      <SocialLinks />
    </div>
  );
}

export default App;