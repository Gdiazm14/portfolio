import { Navbar }     from './components/Navbar.js';
import { Hero }       from './components/Hero.js';
import { About }      from './components/About.js';
import { Skills }     from './components/Skills.js';
import { Projects }   from './components/Projects.js';
import { Experience } from './components/Experience.js';
import { Approach }   from './components/Approach.js';
import { Education }  from './components/Education.js';
import { Contact }    from './components/Contact.js';
import { Footer }     from './components/Footer.js';

export default function App() {
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary/30 selection:text-primary bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#16203a] via-[#0c1324] to-[#04060c] bg-fixed">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Approach />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
