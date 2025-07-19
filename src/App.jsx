import React,{useEffect} from 'react';
import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Lenis from '@studio-freight/lenis';
function App() {
  useEffect(() => {
    //document.body.classList.add('lenis', 'lenis-smooth');
    const lenis = new Lenis({
      lerp: 0.15, // Adjust for smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero section with grid background */}
      <div className="relative">
        <GridBackground />
        <Hero />
      </div>
      
      {/* Other sections with solid background */}
      <div className="relative bg-[#0a0e1a]">
        <Projects />
        <Internships />
        <Skills />
      </div>
      
      <SocialLinks />
    </div>
  );
}

export default App;