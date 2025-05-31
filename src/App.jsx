    import React from 'react';
    import GridBackground from './components/GridBackground';
    import Hero from './components/Hero.JSX';
    import SocialLinks from './components/SocialLinks';
    import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';

    function App() {
      return (
        <div > {/* Added bg-black and min-h-screen classes */}
          <GridBackground />
          <Hero name="Dishang" />
          <SocialLinks />
          <Internships />
          <Projects/>
          <Skills />
        </div>
      );
    }

    export default App;